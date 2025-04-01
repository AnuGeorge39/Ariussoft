import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';
import FAQ from '../Components/FAQ.jsx';
import BannerImage from "../assets/Images/img2.jpg";



function ECommerceWebsiteDevelopment(){
  return (
    <>
    
     <div className="banner">
      <img src={BannerImage} className="banner" alt="bannar image " />
      <div className="banner-content">
        <h1>E-Commerce Website Development</h1>
        <p>process of creating an online platform where businesses can sell products or services to customers over the internet.</p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>Ariussoft has been creating efficient and easy-to-use e-commerce websites, with exceptional shopping experiences that lead to sales, for a long time. Our team builds and develops online stores as per the customer's needs, providing seamless functionality, secure payment integrations, and responsive design on all devices. We are all about performance, scalability, and conversion optimization, and so we provide business solutions for developing a functional e-commerce platform that is not limited only to customer attraction. The e-commerce platform also facilitates business growth and profitability to the maximum level.</p>
   
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>Custom Store Design</li>
        <p>Unique, brand-aligned designs that captivate and engage your audience.</p>
        <li>Mobile-Friendly Development</li>
        <p>Responsive e-commerce websites that work seamlessly across all devices.</p>
        <li>Secure Payment Integration</li>
        <p>Multiple payment gateways with robust security for safe transactions.</p>
        <li>Product Management System</li>
        <p>Easy-to-use dashboards for managing inventory, pricing, and categories.</p>
        <li>Search Engine Optimization (SEO)</li>
        <p>Optimized to rank higher in search engines and attract more customers.</p>
        <li>Multi-Language and Currency Support</li>
        <p>Global reach with support for various languages and currencies.</p>
         </ul>
      <h3 className="heading">FAQ</h3>
   <FAQ/>
   </div>
    <Contactform/>
    </>
   
  );
}

export default ECommerceWebsiteDevelopment;