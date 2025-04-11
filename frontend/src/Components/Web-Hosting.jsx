import React from 'react';
import './css/Banner.css';
import Contactform from '../Components/ContactForm.jsx';
import BannerImage from "../assets/Images/img3.jpg";

function WebHosting(){
  return (
    <>
    
     <div className="banner">
      <img src={BannerImage} className="banner" alt="bannar image " />
      <div className="banner-content">
        <h1>Web Hosting</h1>
        <p>Service that allows individuals, businesses, and organizations to make their websites accessible on the internet.</p>
      </div>
    </div>
    <div className="Software-development-content">
    <p>Wanna keep your website up and running smoothly and efficiently? Ariussoft stands out as a top provider of reliable and secure web hosting services. Our unique offerings include high uptime, fast loading speeds, and exceptional security features, guaranteeing that your website remains accessible and operates at its best. We provide scalable options, whether you require shared hosting, VPS, or dedicated servers tailored to your business needs. Trust Ariussoft to supply the robust infrastructure that supports your online presence and growth.</p>
   
     
      <h3 className="heading">Our Features</h3>
      <ul>
        <li>High Uptime Guarantee</li>
        <p>Enjoy uninterrupted website performance with 99.9% uptime reliability.</p>
        <li>Secure Hosting</li>
        <p>Comprehensive security features, including SSL certificates, firewalls, and regular malware scanning.</p>
        <li>Scalable Plans</li>
        <p>Flexible hosting solutions that grow with your business needs.</p>
        <li>Easy-to-Use Control Panel</li>
        <p>Manage your hosting settings effortlessly with intuitive tools.</p>
        <li>Dedicated Customer Support</li>
        <p>Dedicated support to resolve issues and answer your queries anytime.</p>
        <li>Domain Registration and Email Solutions</li>
        <p>One-stop solution for managing your website domain and professional email accounts.</p>
        <li>Google Workspace / Office 360 Mail Services
        </li>
         </ul>
     
   </div>
    <Contactform/>
    </>
   
  );
}

export default WebHosting;