import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';


function PackageDesign(){
  return (
    <>
    
     <div className="banner">
      <div className="banner-content">
        <h1>Package Design</h1>
        <p>Art and process of creating the visual and structural aspects of a product's packaging.</p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>We truly believe that packaging goes beyond holding a product—it catches eyes. We aim at the target crowd and produce amazing designs to help your product shine on shelves and connect with your target crowd. The designs and packing should be eye-catching looks to practical designs. The packaging itself would show your brand's character and beliefs. With close attention to detail, we make superb designs that pack a punch. We AriusSoft make your packaging into a strong marketing tool that sticks in people's eyes and minds.</p>
    
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>Custom Design Solutions</li>
        <p>Tailored packaging designs that reflect your brand’s values and appeal to your target audience.</p>
        <li>Brand Consistency</li>
        <p>Ensuring your packaging aligns with your overall brand identity, including logos, colors, and messaging.</p>
        <li>User-Centered Design</li>
        <p>Functional packaging designed for convenience, easy handling, and enhanced customer experience.</p>
        <li>Attention-Grabbing Designs</li>
        <p>Unique and creative packaging that stands out on shelves and online.</p>
       
         </ul>
      
   </div>
    <Contactform/>
    </>
   
  );
}

export default PackageDesign;