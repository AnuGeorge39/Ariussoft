import React from 'react';
import Card from 'react-bootstrap/Card';
import Slide1_aboutus from '../assets/Images/aboutus.jpg';
import './css/About_us.css';
import ContactForm from './ContactForm';

function HostStation() {
  return (
    <>
    <Card className="d-flex flex-row">
    
      <Card.Img 
        variant="top" 
        src={Slide1_aboutus} 
        className='aboutus_img' 
        style={{ width: '40%', height: 'auto' }} 
      />

      {}
      <Card.Body className="aboutus_text" style={{ flex: 1 }}>
        <h5>Host Station</h5>
        <h3>Arius Host Station</h3>
        <Card.Text>
        At HostStation, we understand the vital role a website plays in establishing your digital presence. That’s why we
         provide a comprehensive range of web hosting solutions designed to meet the needs of businesses of all sizes 
         small, medium, or large.Our hosting services are built on reliable, industry-proven foundations to ensure your 
         website remains online, secure,and accessible at all times. Whether you need shared hosting for a smaller website or dedicated and cloud hosting for 
        high-traffic platforms, we deliver seamless solutions to keep your business running smoothly.
        </Card.Text>
        <h3>Why HostStation?</h3>
      <ul>
        <li>Experience You Can Trust: Two decades of expertise in hosting and domain management.</li>
        <li>24/7 Support: Dedicated customer service to resolve issues and ensure uninterrupted service.</li>
        <li>Custom Solutions: Hosting packages tailored to your business needs.</li>
      </ul>
      </Card.Body>
      
    </Card>
    
    <h3>Our Services Include</h3>
   
    <ul>
        <li>Shared Hosting: Ideal for small websites and startups.</li>
        <li>Dedicated Hosting: Powerful hosting for businesses that require high performance.</li>
        <li>Cloud Hosting: Scalable solutions for handling heavy traffic and large applications.</li>
        <li>Domain Registration: Successfully managing 1,500+ domains over the past 20 years.</li>
        <li>Webmail Services: Efficient and secure email hosting.</li>
        <li>Paid Mail Services: Integration with premium services like Google Workspace, Microsoft Office 365 , and Zoho Mail for professional communication.</li>

    </ul>
<ContactForm/>
       
    </>
  );
}

export default HostStation;
