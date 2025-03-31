// In UncontrolledExample.js
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Slide_1 from '../assets/Images/img1.jpg';
import Slide_2 from '../assets/Images/img2.jpg';
import Slide_3 from '../assets/Images/img3.jpg';
import Slide_4 from '../assets/Images/img4.jpg';
import Slide_5 from '../assets/Images/img5.jpg';
import "../Components/css/Carousel.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_1} />
        <Carousel.Caption>
          <h3>WebSite Development</h3>
          <p> Process of building, programming, and maintaining websites and web applications.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_2} />
        <Carousel.Caption>
          <h3>Web Development</h3>
          <p>There are three main types of web development: front-end development, back-end development, and full stack development..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_3} />
        <Carousel.Caption>
          <h3>Digital marketing </h3>
          <p>Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones,
             and other digital media and platforms to promote products and services.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_4} />
        <Carousel.Caption>
          <h3>Web Design</h3>
          <p>Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_5} />
        <Carousel.Caption>
          <h3>Web Development</h3>
          <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services..</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default UncontrolledExample;
