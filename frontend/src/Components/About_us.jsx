import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slide1_aboutus from '../assets/Images/aboutus.jpg';
import './css/About_us.css';

function Aboutus() {
  return (
    <Card className="d-flex flex-row">
      {/* Image Section */}
      <Card.Img 
        variant="top" 
        src={Slide1_aboutus} 
        className='aboutus_img' 
        style={{ width: '40%', height: 'auto' }} // Adjust width and height for the image
      />

      {/* Text Section */}
      <Card.Body className="aboutus_text" style={{ flex: 1 }}>
        <Card.Title className="aboutus_title">About Us</Card.Title>
        <Card.Text>
          Ariussoft Infotech Pvt Ltd is a one-stop, A-to-Z solution for all IT consulting and project 
          management services. Being a leading web solution provider, Ariussoft offers expertise
          across web design, web application development, graphic design, and also some of the other 
          recent web solutions like hosting services, social media management, digital marketing, 
          mobile app development, etc. Through the years of exposure of over 20 years coupled with 
          850+ clients, Ariussoft has molded itself to become a trusted company in the sector, 
          capable of delivering actual results while also establishing the benchmark, the rest can only 
          dream of reaching.
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Aboutus;
