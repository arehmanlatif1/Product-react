import Product from "../components/Product.jsx";

function Products({products}) {

  return (
    <div>
      <h1>Products</h1>
      <div className='products-container'>
        {
          products?.map((product) => (
            <Product product={product} key={product._title} />
          ))
        }
      </div>
    </div>
  )
}

export default Products