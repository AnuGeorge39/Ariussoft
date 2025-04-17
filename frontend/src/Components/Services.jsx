import React, { useEffect, useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Services.css';

function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleClick = (link) => {
    navigate(link);
  };

  const groupedServices = [];
  for (let i = 0; i < services.length; i += 4) {
    groupedServices.push(services.slice(i, i + 4));
  }

  return (
    <div className="container mt-5">
      <section id="services">
        <h2 className="services">Our Services</h2>

        <Carousel>
          {groupedServices.map((group, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-between">
                {group.map((service, i) => (
                  <Card key={i} className="custom-card">
                   <Card.Img variant="top" src={`http://localhost:5000${service.image}`} />
                    <Card.Body>
                      <h5>{service.title}</h5>
                      <Card.Text>{service.description}</Card.Text>
                      <Button variant="primary" onClick={() => handleClick(service.link)}>Learn More</Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Services;
