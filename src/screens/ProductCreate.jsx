import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createProduct } from "../services/products";

function ProductCreate() {

  const [product, setProduct] = useState({

    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
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
        <input 
        type="text"
        placeholder="Product title"
        name="title"
        value={product.title} 
        onChange={handleChange}
        />
        <input 
        type="text"
        placeholder="Write Description"
        name="description"
        value={product.description} 
        onChange={handleChange}
        />
        <input 
        type="number"
        placeholder="Enter Price"
        name="price"
        value={product.price} 
        onChange={handleChange}
        />
        <input 
        type="number"
        placeholder="Discount Percentage"
        name="discountPercentage"
        value={product.discountPercentage} 
        onChange={handleChange}
        />
          <input 
        type="number"
        placeholder="rating"
        name="rating"
        value={product.rating} 
        onChange={handleChange}
        />
        <input 
        type="number"
        placeholder="Stock"
        name="stock"
        value={product.stock} 
        onChange={handleChange}
        />
        <input 
        type="text"
        placeholder="Brand"
        name="brand"
        value={product.brand} 
        onChange={handleChange}
        />
        <input 
        type="text"
        placeholder="Category"
        name="category"
        value={product.category} 
        onChange={handleChange}
        />
        <input 
        type="text"
        placeholder="Thumbnail"
        name="thumbnail"
        value={product.thumbnail} 
        onChange={handleChange}
        />
        {/* <input 
        type="text"
        placeholder="Image"
        name="images"
        value={product.images} 
        onChange={handleChange}
        /> */}
        <div>
          <label htmlFor="stock-box">In Stock:
        <input
        id="stock-box"
        type="checkbox"
        name="stock"
        checked={product.stock} 
        onChange={handleCheckboxChange}
        />
          </label>
        </div>

          <button type="Submit">Create Product</button>
      </form>
    </div>
  )
}

export default ProductCreate;