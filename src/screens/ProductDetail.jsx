import { getProduct, deleteProduct } from "../services/products.js";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState({});

  let { title } = useParams();
  let navigate = useNavigate();

  const fetchProduct = async () => {
    const oneProduct = await getProduct(title);
    setProduct(oneProduct);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDelete = async () => {
    await deleteProduct(product._id);
    navigate("/products");
  };

  return (
    <div className="details-container">
      <h1>Welcome To {product.title}</h1>
      <div className="details">
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Discount Percentge: {product.discountPercentage}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>
      <img src={product.thumbnail} alt={product.name} />
      <div className="images-container">
        {product?.images?.length > 0 &&
          product.images.map((img) => (
            <img src={img} alt="product inventory" />
          ))}
      </div>
      <div>
        <Link to={`/products/${title}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ProductDetail;
