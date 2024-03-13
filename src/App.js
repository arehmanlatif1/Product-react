import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ProductCreate from "./screens/ProductCreate.jsx";
import Products from "./screens/Products.jsx";
import ProductDetail from "./screens/ProductDetail.jsx";
import ProductEdit from "./screens/ProductEdit.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { getProducts } from "./services/products.js";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const allProducts = await getProducts();
    setProducts(allProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:title" element={<ProductDetail />} />
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
        <Route path="/add-product" element={<ProductCreate />} />
        <Route path="/products/:title/edit" element={<ProductEdit />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
