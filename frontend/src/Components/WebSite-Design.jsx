import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';
import FAQ from '../Components/FAQ.jsx';
import BannerImage from "../assets/Images/img4.jpg";




function WebSiteDesign(){
  return (
    <>
    
     <div className="banner">
      <img src={BannerImage} className="banner" alt="bannar image " />
      <div className="banner-content">
        <h1>WebSite Design</h1>
        <p>process of creating software applications that run on mobile devices, such as smartphones and tablets. These apps are designed to provide specific functionalities to users, making use of the mobile device's capabilities, including sensors, cameras, location, and more.</p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>An art and science of crafting and engaging websites, Web design is not for amateurs. At Ariussoft, we with the guidance of seasoned professionals combine aesthetics with top-end technology to guarantee users a nice and easy experience. Be it a layout, colour schemes, typography, or for that matter a responsive design, our team ensures that each website supports all devices.</p>
    <h3 className="heading">Why Choose Us</h3>
    
    <p>
      <ul>
        <li>Responsive and Mobile-Friendly Designs</li>
        <li>UX/UI Focused</li>
        <li>SEO-Friendly Websites</li>
        <li>Custom Web Development Solutions</li>
      </ul>
      </p>
      <h3 className="heading">Our Process</h3>
      <ul>
        <li>Discovery & Planning</li>
        <li>Design & Development</li>
        <li>Testing & Launch</li>
        <li>Launch & Maintenance</li>
      </ul>
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>Custom Website Design</li>
        <p>Unique, creative designs that align with your brand identity and goals.</p>
        <li>Responsive Design</li>
        <p>Websites optimized for all devices, from desktops to smartphones.</p>
        <li>User-Centric Interfaces</li>
        <p>Intuitive navigation and layouts that enhance user experience.</p>
        <li>SEO-Friendly Development</li>
        <p>Optimized for search engines to boost your online visibility.</p>
        <li>Fast Loading Speed</li>
        <p>Websites built for speed and reliability to keep users engaged.</p>
        <li>Maintenance and Support</li>
        <p>Continuous updates and support to keep your website running smoothly.</p>
         </ul>
      <h3 className="heading">FAQ</h3>
   <FAQ/>
   </div>
    <Contactform/>
    </>
   
  );
}

export default WebSiteDesign;