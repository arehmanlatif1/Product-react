import { NavLink } from "react-router-dom";


function Nav() {
  return (
   <nav>
    <NavLink className="nav-home" to="/" >🏚️Home </NavLink>
    <NavLink className="nav-products" to="/Products">🖥️ Product</NavLink>
    <NavLink className="nav-add-product" to="/Add-Product">➕Add New Product</NavLink>
   </nav>
  )
}

export default Nav