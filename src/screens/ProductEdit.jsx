import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createProduct, editProduct, getProduct } from "../services/products";

function ProductEdit() {

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
  });

  let { title } = useParams();
  let navigate = useNavigate();

  async function fetchProduct() {
    const oneProduct = await getProduct(title)
    setProduct(oneProduct)
  }

  useEffect(() => {
    fetchProduct()

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newProduct = await editProduct(product._id, product);
    navigate(`/products/${newProduct.title}`);

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
    <div>
      <h1>Edit Product</h1>
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
        type="nuumber"
        placeholder="Enter Price"
        name="Price"
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
        name="Give Rating"
        value={product.rating} 
        onChange={handleChange}
        />
        <input 
        type="type"
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
        <input 
        type="text"
        placeholder="Image"
        name="images"
        value={product.images} 
        onChange={handleChange}
        />
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

          <button type="Submit">Edit Product</button>
      </form>
    </div>
  )
}

export default ProductEdit;