import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';


function Advertising(){
  return (
    <>
    
     <div className="banner">
      <div className="banner-content">
        <h1>Advertising</h1>
        <p> It is a form of communication aimed at persuading an audience to take a specific action, usually to purchase a product, service, or idea. </p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>We, AriusSoft are masters in making superb ideas and innovation to craft advertising campaigns that just not only stand out but produce tangible results. Ariussoft provides highly efficient services to manage your social media and thus uplift your brand online. Our team makes up the strategies to engage your audience, create captivating content, and enable community interaction. We take care of every detail from planning and scheduling posts to analyzing performance metrics so that your social channels are active, effective, and in line with your business goals. Team up with Ariussoft to amplify your reach and establish deeper relations with your audience.</p>
   
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>Digital Advertising</li>
        <p>Maximize your online presence with targeted campaigns across Google Ads, Facebook, Instagram, and more.</p>
        <li>Pay-Per-Click (PPC)</li>
        <p>Instantly drive traffic with optimized PPC campaigns that offer measurable ROI.</p>
        <li>Display Ads & Banner Campaigns</li>
        <p>Catch your audience's eye with engaging display ads and banner designs on high-traffic websites.</p>
        <li>Video Advertising</li>
        <p>Leverage the power of video ads on YouTube, Instagram, and other platforms for greater engagement.</p>
        <li>Remarketing Campaigns</li>
        <p>Reconnect with visitors who have shown interest in your brand, increasing the likelihood of conversion.</p>
        <li>Creative Ad Design</li>
        <p>Craft compelling and visually appealing ad creatives that resonate with your audience.</p>
        <li>Analytics & Reporting</li>
        <p>Track, measure, and optimize your campaigns to ensure you achieve your advertising goals.</p>
         </ul>
   </div>
    <Contactform/>
    </>
   
  );
}

export default Advertising;