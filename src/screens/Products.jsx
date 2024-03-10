import { useState, useEffect } from 'react';
import { getProducts } from '../services/products.js';
import Product from "../components/Product.jsx";

function Products() {

  const [products, setProducts] = useState([])

  async function fetchProducts(){
    const allProducts = await getProduct()
    setProducts(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className='products-container'>
        {
          products.map((products) => (
            <Product product={product} key={product._title} />
          ))
        }
      </div>
    </div>
  )
}

export default Products