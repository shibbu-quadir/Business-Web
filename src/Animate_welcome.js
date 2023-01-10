
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
   <div
      data-aos="flip-right" data-aos-duration="1000" //Here you can use any of the AOS animations
    >  <img src="https://thumbs.dreamstime.com/b/welcome-poster-spectrum-brush-strokes-white-background-colorful-gradient-brush-design-vector-paper-illustration-r-welcome-125370796.jpg" width="100%"></img>
    </div>
    
    </>
  );
}