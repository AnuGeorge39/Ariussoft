import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import Slide_1 from '../assets/Images/kerala athletics.png';
import Slide_2 from '../assets/Images/nangelil.png';
import Slide_3 from '../assets/Images/neptune.png';
import Slide_4 from '../assets/Images/Payyappilly.png';
import Slide_5 from '../assets/Images/rubekbaloons.png';
import Slide_6 from '../assets/Images/Soma creations.png';
import Slide_7 from '../assets/Images/St pauls.png';
import Slide_8 from '../assets/Images/Wecare.png';

import './css/Clients.css'; 

function Clients() {
  return (
    <div className="container mt-5">
      <section id="clients">
      <Card.Title className="clients">Our Clients</Card.Title>
      <Carousel>
        
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_1} />
             
            </Card>
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_2} />
             
            </Card>
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_3} />
              
            </Card>
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_4} />
             
             
            </Card>
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_5} />
              
            </Card>
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_6} />
             
            </Card>
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_7} />
              
            </Card>
            <Card className="custom-cards">
              <Card.Img variant="top" src={Slide_8} />
             
            </Card>
          </div>
        </Carousel.Item>

        
      </Carousel>
      </section>
    </div>
  );
}

export default Clients;
