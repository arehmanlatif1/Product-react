import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ProductCreate from "./screens/ProductCreate.jsx";
import Products from "./screens/Products.jsx";
import ProductDetail from "./screens/ProductDetail.jsx";
import ProductEdit from "./screens/ProductEdit.jsx"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:title" element={<ProductDetail />} />
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
        <Route path="/add-product" element={<ProductCreate />} />
        <Route path="/products/:title/edit" element={<ProductEdit />} />

      </Routes>
    </div>
  );
}

export default App;
