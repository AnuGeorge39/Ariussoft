import React from 'react';
import Card from 'react-bootstrap/Card';
import Slide1_aboutus from '../assets/Images/aboutus.jpg';
import './css/About_us.css';
import ContactForm from './ContactForm';

function AriusWebStudio() {
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
        <Card.Title className="aboutus_title">Web studio</Card.Title>
        <h3>Arius Web Studio</h3>
        <Card.Text>
        At Arius Web Studio, we understand that having a website is essential for modern business success, especially for those acquiring new 
        licenses. We combine cutting-edge technology with innovative design tools to guide you in creating a unique, 
        customer-focused website that serves as your brand's identity in the digital space. Our experienced and knowledgeable 
        web design team specializes in developing engaging and user-friendly sites that not only attract traffic but also
         achieve top search rankings, helping you reach your sales and branding goals.
What's more, we offer a variety of customizable packages to suit your specific needs and resources. Our specialized division,
 Arius Web Studio, is committed to delivering next-generation websites built with the latest technologies. From design 
 to development, we ensure your site excels in functionality, aesthetics, and performance.
We invite you to share your ideas with us! Request a free quote, and our team will respond with a tailored package that 
fits your needs and budget.
        </Card.Text>
       
      </Card.Body>
      
    </Card>
    
   <ContactForm/>
    </>
  );
}

export default AriusWebStudio;
