import React from "react";
import { Link } from "react-router-dom";

// about css
import "./about.css";
const About = () => {
	return (
		<>
			<div className="">
				<div className="">
					<h1>About Us</h1>
				</div>
				<div className="">
					<div className="img-container">
						<img
							src="https://img.freepik.com/free-photo/stylish-indian-beard-man-black-leather-jacket-shows-thumb-up-india-model-posed-green-garden-city_627829-13683.jpg"
							alt="Image 1"
							className=""
						/>
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/006/582/035/small/feminine-handbag-for-shopping-travel-vacation-leather-bag-with-handle-isolated-on-white-background-beautiful-casual-collection-of-summer-woman-accessory-flat-design-vector.jpg"
							alt="image 2"
						/>
						<img
							src="https://img.freepik.com/free-vector/sport-training-running-tennis-shoes-advertising-realistic-composition-with-pair-trendy-comfortable-everyday-wear-sneakers-illustration_1284-31193.jpg?w=2000"
							alt="image 3"
						/>
					</div>
					<div className="contact-us-info">
						<h1>We are deling with </h1>
						<p>1. Leather Belts</p>
						<p>2. Leather Jacket</p>
						<p>3. leather purse</p>
						<p>4. leather shoes</p>
					</div>
				</div>
				<div className="contact-us-footer">
					<Link to="/">Back to Home</Link>
				</div>
			</div>
		</>
	);
};

export default About;
