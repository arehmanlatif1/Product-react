import { NavLink } from "react-router-dom";


function Nav() {
  return (
   <nav>
    <NavLink className="nav-home" to="/" >🏚️Home </NavLink>
    <NavLink className="nav-products" to="/Products">🖥️ Product</NavLink>
    <NavLink className="nav-add-product" to="/Add-Product">➕ Product</NavLink>
    <NavLink className="nav-about" to="/About">About</NavLink>
    <NavLink className="nav-contact" to="/Contact">Contact Us</NavLink>
   </nav>
  )
}

export default Nav