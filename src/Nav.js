//import logo from './logo.svg';
import react from "react"
import './App.css';
import "./NavStyle.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
   
   <>
   <nav className="main-div">
	<div className="logo">
  <h2>
	<span>S</span>IBGHATULLAH
<span>Q</span>
  </h2>
</div>
<div className="menu-link">
	<ul>
		<li>
			<NavLink to="/">Home</NavLink>
		</li>
		<li>
			<NavLink to="/Contact">Contact Us</NavLink>
		</li>
		<li>
			<NavLink to="/About">About Us</NavLink>
		</li>
	</ul>
</div>

   </nav>
   </>
  );
}

export default Navbar;