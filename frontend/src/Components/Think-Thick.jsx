import React from 'react';
import Card from 'react-bootstrap/Card';
import Slide1_aboutus from '../assets/Images/aboutus.jpg';
import './css/About_us.css';
import ContactForm from './ContactForm';

function ThinkThick() {
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
        <h5>Think Thick</h5>
        <h3>Arius Think Thick</h3>
        <Card.Text>
        At Think Thick, we specialize in creating unique and memorable brands that not only stand out in the market 
        but also build meaningful connections with the public—especially their target audience. Our tailor-made suite of 
        services, including brand strategy, digital marketing, creative campaigns, and analytics, empowers businesses to 
        thrive in today’s competitive and complex digital landscape.As a design and creative communication agency, Think Thick offers a diverse range of services aimed at building brands that resonate across generations. Our talented team, experienced in multi-category brand campaigns, brings together creativity, strategy, and innovation to deliver impactful results.
        </Card.Text>
        <h3>Why Think Thick?</h3>
      <p>Realizing the growing potential of the branding and advertising industry inspired the creation of Think Thick. We are passionate about producing beautiful, timely, and result-oriented solutions tailored to your unique needs, ensuring your brand gains the visibility it deserves in an increasingly competitive digital world.</p>
      </Card.Body>
      
    </Card>
    
    <h3>Our Expertise</h3>
    <p>We offer a comprehensive suite of services, including:</p>
    <ul>
        <li>Brand Strategy</li>
        <li>Digital Marketing</li>
        <li>Social Media Management</li>
        <li>Creative Campaigns</li>
        <li>Social Media Campaigns</li>
        <li>Package Design</li>
        <li>Promotions</li>

    </ul>
<ContactForm/>
       
    </>
  );
}

export default ThinkThick;
