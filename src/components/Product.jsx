import { Link } from "react-router-dom";

function Product({ product }) {
    console.log(product)
  return (
        <Link to={`/products/${product.title}`}>
          <div>
            {product.title}
                <img className="prod-images" src={product.thumbnail} alt={product.name} />
          </div>
        </Link>
  )
}

export default Product;