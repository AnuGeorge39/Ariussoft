import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';
import FAQ from '../Components/FAQ.jsx';



function DigitalMarketing(){
  return (
    <>
    
     <div className="banner">
      <div className="banner-content">
        <h1>Digital Marketing</h1>
        <p>The use of digital channels, platforms, and technologies to promote and advertise products, services, or brands to consumers and businesses.</p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>Digital marketing is all about how we use online platforms to promote products and services. Companies choose Ariussoft for its expertise in delivering tailored, cutting-edge strategies that drive measurable growth. Our SEO, social media, and analytics strategy is to create targeted campaigns that drive engagement and yield quantifiable results. We prioritise high-quality content along with strategic ad placement to expand your reach. However, our agile digital solutions adapt to user behaviours, thus ensuring sustained growth and maximum ROI.</p>
   
    
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>Search Engine Marketing (SEM)</li>
        <p>Maximize visibility with paid search campaigns in Google Ads.</p>
        <li>Social Media Marketing (SMM)</li>
        <p>Engage your audience with targeted campaigns on platforms like Facebook & Instagram.</p>
        <li>Pay-Per-Click (PPC) Advertising</li>
        <p>High-performance ads that deliver instant traffic and measurable ROI.</p>
        <li>Influencer Marketing</li>
        <p>Collaborate with influencers to expand your reach and credibility.</p>
        
         </ul>
     
   </div>
    <Contactform/>
    </>
   
  );
}

export default DigitalMarketing;