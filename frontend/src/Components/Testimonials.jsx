import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import Slide_1 from '../assets/Images/img1.jpg';
import Slide_2 from '../assets/Images/img2.jpg';
import Slide_3 from '../assets/Images/img3.jpg';
import Slide_4 from '../assets/Images/img4.jpg';
import Slide_5 from '../assets/Images/img5.jpg';
import './css/Testimonials.css';

function Testimonials() {
  return (
    <div className="container mt-5">
      <Card.Title className="testimonials">Testimonials</Card.Title>
      <Carousel>
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <Card className="custom-cards-testimonials">
             
              <Card.Body>
                
                <Card.Text>
                    I remember the day when I had a brief conversation with Mr. Basil Paul, the Director of Ariussoft, about St. paul's business. With two decades of experience, he knows how to manage and host the site effectively. Just recently, we decided to hand over social media management to their team. They are a friendly group and nice people to work with.
            
                </Card.Text>
                
              </Card.Body>
             
              <Card.Title>Eldhose Vidyan</Card.Title>
              <Card.Title>St. Paul's Ayurveda</Card.Title>
            </Card>
            <Card className="custom-cards-testimonials">
              
              <Card.Body>
               
                <Card.Text>
                  We have 4 years of strong and healthy relationship with Ariussoft infotech. All through these years they have catered to all my business needs, from custom software to creative be=randing, digital marketing and web hosting. Their expertise and seamless service coordination are unmatched. 
                  </Card.Text>
                
              </Card.Body>
              <Card.Title>Benny Varghese</Card.Title>
              <Card.Title>Wego Holiday</Card.Title>
            </Card>
            <Card className="custom-cards-testimonials">
              
              <Card.Body>
                
                <Card.Text>
                  At first, we doubted digital marketing's ability to boost sales for a watersport comapny. But I said we owe its success to Ariussoft Infotech. Our watersport business now enjoys much more online visiblity and customer interaction. Their digital marketing plans have taken Neptune to the next level.  
                </Card.Text>
                
              </Card.Body>
              <Card.Title>Mr. Mesh Manohar</Card.Title>
              <Card.Title>Neptune Water Sports</Card.Title>
            </Card>
            
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
          <Card className="custom-cards-testimonials">
              
              <Card.Body>
               
                <Card.Text>
                  Working with Web Studio was a totally good experience. They were vary fast and delivered custom software tailored to our needs with exceptional quality and support. Highly efficient and reliable people.
                </Card.Text>
                
              </Card.Body>
              <Card.Title>Pradeepan K</Card.Title>
              <Card.Title>Arreta Engineering Solutions</Card.Title>
            </Card>
            <Card className="custom-cards-testimonials">
              
              <Card.Body>
               
                <Card.Text>
                  What I truly admire about Ariussoft is their deep commitment to a meaningful cause. Attakalam embodies a beautiful vision to preserve art by uniting both recognised and overlooked artists and groups under one proof, providing them with the opportunity and space they truly desrve. It's a niche model, yet Ariussoft has wholeheartedly supported us.  
                  </Card.Text>
                
              </Card.Body>
              <Card.Title>Sajitha Madathil</Card.Title>
              <Card.Title>Attakkalam</Card.Title>
            </Card>
            <Card className="custom-cards-testimonials">
              
              <Card.Body>
                
                <Card.Text>
                  At first, we doubted digital marketing's ability to boost sales for a watersport comapny. But I said we owe its success to Ariussoft Infotech. Our watersport business now enjoys much more online visiblity and customer interaction. Their digital marketing plans have taken Neptune to the next level.  
                </Card.Text>
                
              </Card.Body>
              <Card.Title>Mr. Mesh Manohar</Card.Title>
              <Card.Title>Neptune Water Sports</Card.Title>
            </Card>
            
           
           
          </div>
        </Carousel.Item>

        
      </Carousel>
    </div>
  );
}

export default Testimonials;
