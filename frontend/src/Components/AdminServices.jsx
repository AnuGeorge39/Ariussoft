import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './css/Services.css';

function AdminServices() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', image: '', link: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios.get('http://localhost:5000/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios.put(`http://localhost:5000/api/services/${editingId}`, formData)
        .then(() => {
          fetchServices();
          resetForm();
        });
    } else {
      axios.post('http://localhost:5000/api/services', formData)
        .then(() => {
          fetchServices();
          resetForm();
        });
    }
  };

  const handleEdit = (service) => {
    setFormData(service);
    setEditingId(service._id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      axios.delete(`http://localhost:5000/api/services/${id}`)
        .then(() => fetchServices());
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', image: '', link: '' });
    setEditingId(null);
  };

  return (
    <div className="container mt-5">
      <section id="admin-services">
        <h2>Admin Panel - Manage Services</h2>

        {/* Service Form for CRUD operations */}
        <Form onSubmit={handleSubmit} className="mb-4">
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              name="image"
              placeholder="Image filename (e.g., img1.jpg)"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              name="link"
              placeholder="Link path (e.g., /search-engine-optimization)"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant={editingId ? "warning" : "success"}>
            {editingId ? "Update Service" : "Add Service"}
          </Button>
          {editingId && <Button variant="secondary" onClick={resetForm} className="ms-2">Cancel</Button>}
        </Form>

        {/* Display existing services for editing and deletion */}
        <h3>Existing Services</h3>
        <div className="d-flex flex-wrap">
          {services.map((service) => (
            <Card key={service._id} className="custom-card m-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={(`../assets/Images/${service.image}`)} />
              <Card.Body>
                <h5>{service.title}</h5>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="info" size="sm" onClick={() => handleEdit(service)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(service._id)}>Delete</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminServices;
