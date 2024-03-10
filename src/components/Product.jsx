import { Link } from "react-router-dom";

function Product() {
    
  return (
    <div>
        <Link to={`/products/${products._title}`}>
        <img className="prod-images" src={product.name} alt={product.name} />
        </Link>
    </div>
  )
}

export default Product