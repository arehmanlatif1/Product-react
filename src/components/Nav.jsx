import { NavLink } from "react-router-dom";


function Nav() {
  return (
   <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Products">Product</NavLink>
    <NavLink to="/Add-Product">Add New Product</NavLink>
   </nav>
  )
}

export default Nav