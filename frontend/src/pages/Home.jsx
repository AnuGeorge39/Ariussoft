import React from 'react'
import UncontrolledExample from "../Components/Carousel.jsx";
import About_us from '../Components/About_us.jsx';
import Clients from  '../Components/Clients.jsx';
import Testimonials from '../Components/Testimonials.jsx';
import Services from '../Components/Services.jsx';

export default function Home() {
  return (
    <div>
      
        <UncontrolledExample/>
        <About_us/>
        <Services/>
        <Clients/>
        <Testimonials/>
        
        </div>
  )
}
