import { useState, useEffect } from 'react';
import { getProducts } from '../services/products.js';
import Product from "../components/Product.jsx";

function Products() {

  const [products, setProducts] = useState([])

  async function fetchProducts(){
    const allProducts = await getProducts()
    setProducts(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, []);
console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div className='products-container'>
        {
          products.map((product) => (
            <Product className="prod-div" product={product} key={product._title} />
          ))
        }
      </div>
    </div>
  )
}

export default Products