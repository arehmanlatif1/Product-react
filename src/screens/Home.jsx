import { useState, useEffect } from "react";
import Product from "../components/Product.jsx";

function Home({ products }) {
  const [showCaseProducts, setShowCaseProducts] = useState([]);

  useEffect(() => {
    // Set up for sample array
    let shuffledArr = shuffleAndCutArray([...products]); // call shuffle function on COPY of allProducts array (created new array and spread contents of original)
    setShowCaseProducts(shuffledArr);
  }, [products]);

  function shuffleAndCutArray(arr) {
    // Shuffle array
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Cutting the length of array to 5 elements
    arr.length = 5;

    return arr;
  }

  return (
    <div>
      <h1 className="home"> Welcome Home</h1>
      <h3>Sample Products</h3>
      <div className="samples-container">
        {showCaseProducts?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
