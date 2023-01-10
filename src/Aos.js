
import React,{useEffect} from "react";
import "./NavStyle.css"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyFunctionalComponent() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <div className="contact-section">
    <div
      data-aos="flip-right" data-aos-duration="1000" //Here you can use any of the AOS animations
    >
      
	<h1 style={{color:"green"}}>
		This is a Contact Page.</h1>
		
		<section>
			<img src = "https://www.shutterstock.com/image-photo/tie-belt-wallet-accessory-man-260nw-658063816.jpg">

				</img>
				
				
				
		</section>
			<h1>Want To Buy</h1>
			
			<h2>Contact us by below contacts</h2>
		
		
		
   <table>
      <tr>
          <td> Call: +918044211</td>
      </tr>
	  <tr>
          <td> Watsapp: +91800222 </td>
      </tr>
	  <tr>
          <td> Email id: sf@gmail.com </td>
      </tr>
   </table>
    </div>
    </div>
    </>
  );
}