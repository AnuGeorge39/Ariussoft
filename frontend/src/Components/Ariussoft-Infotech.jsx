import React from 'react';
import Card from 'react-bootstrap/Card';
import Slide1_aboutus from '../assets/Images/aboutus.jpg';
import './css/About_us.css';

function AriussoftInfotech() {
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
        <Card.Title className="aboutus_title">About Us</Card.Title>
        <h3>Ariussoft Infotech</h3>
        <Card.Text>
        Founded in 2004, Ariussoft Infotech Pvt. Ltd.
         began with a mission to address the evolving needs of the IT and ITES sectors globally. 
         Initially specializing in website design and hosting, the company underwent a transformative rebranding in 2011, 
         becoming Arius Web Studio, before being registered as a private limited company in 2015.
        </Card.Text>
        <h3>A Legacy of Excellence</h3>
      <p>With over 20 years of experience, Ariussoft has grown into a trusted leader in:</p>
      <ul>
        <li>Website Design & Development</li>
        <li>Mobile App Development</li>
         <li>Software Development</li>
        <li>Digital Marketing</li>
        <li>Branding</li>
        <li>Print Media Design</li>
        <li>Domain Registration, Hosting & Email Service</li>
      </ul>
      </Card.Body>
      
    </Card>
    
    <h3>Our Reach and Impact</h3>
    <p>Over the years, Ariussoft has successfully served 1,000+ clients across 10+ countries, delivering exceptional quality 
        and earning trust worldwide. With expertise spanning two decades, we pride ourselves on our ability to innovate
         and provide tailored solutions that exceed customer expectations.</p>
         <h3>Why Choose Ariussoft?</h3>
        <ul>
            <li>Global Experience: A track record of success in diverse industries.</li>
            <li>Creative Expertise: Special focus on web solutions and cutting-edge design.</li>
            <li>Client-Centric Approach: Trusted by over 1000+ satisfied customers, with our client base continuing to grow.</li>
            <li>End-to-End Solutions: From web hosting and app development to branding and digital marketing.</li>
            <li>At Ariussoft Infotech, our commitment to quality and innovation has solidified our position as a top-tier IT service provider. Let us help you achieve your digital goals!</li>
        </ul>
    </>
  );
}

export default AriussoftInfotech;
