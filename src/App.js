import React from "react";
import "./NavStyle.css"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./About";
import About from "./Home";
import Contact from "./Contact";

function App() {

	return (
		<>
			<BrowserRouter>
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
					{/*</BrowserRouter><div style={ margin: '10px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/contact" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Contact
						</NavLink>
					</div>
                        </div>*/}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
