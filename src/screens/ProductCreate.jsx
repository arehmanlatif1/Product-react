import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createProduct } from "../services/products";

function ProductCreate() {

  const [product, setProduct] = useState({

    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: []
  })

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProduct(product);
    navigate("/products");

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: checked,
    }));
  };

  return (
    <div className="create-conatainer">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <h2>Product Title:<input 
        type="text"
        name="title"
        value={product.title} 
        onChange={handleChange}
        /></h2>
        <h2>Description:<input 
        type="text"
        name="description"
        value={product.description} 
        onChange={handleChange}
        /></h2>
        <h2>Enter Price:<input 
        type="number"
        name="price"
        value={product.price} 
        onChange={handleChange}
        /></h2>
        <h2>Discount Percentage:<input 
        type="number"
        name="discountPercentage"
        value={product.discountPercentage} 
        onChange={handleChange}
        /></h2>
          <h2>Rating:<input 
        type="number"
        name="rating"
        value={product.rating} 
        onChange={handleChange}
        /></h2>
        <h2>Stock Value:<input 
        type="number"
        name="stock"
        value={product.stock} 
        onChange={handleChange}
        /></h2>
        <h2>Brand:<input 
        type="text"
        name="brand"
        value={product.brand} 
        onChange={handleChange}
        /></h2>
        <h2>Category:<input 
        type="text"
        name="category"
        value={product.category} 
        onChange={handleChange}
        /></h2>
        <h2>Thumbnails:<input 
        type="text"
        name="thumbnail"
        value={product.thumbnail} 
        onChange={handleChange}
        /></h2>
        {/* <input 
        type="text"
        placeholder="Image"
        name="images"
        value={product.images} 
        onChange={handleChange}
        /> */}
        <div>
          <label className="stock-tik" htmlFor="stock-box">
        <h2>In Stock:<input
        id="stock-box"
        type="checkbox"
        name="stock"
        checked={product.stock} 
        onChange={handleCheckboxChange}
        /></h2>
          </label>
        </div>

          <button type="Submit">Create Product</button>
      </form>
    </div>
  )
}

export default ProductCreate;