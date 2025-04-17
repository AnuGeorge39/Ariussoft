import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', image: '' });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch services on mount
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/services');
      setServices(res.data);
    } catch (err) {
      setMessage('');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (imageFile) {
      const data = new FormData();
      data.append('image', imageFile);
      try {
        const res = await axios.post('http://localhost:5000/api/uploads', data);
        imageUrl = res.data.imageUrl || '';
      } catch (err) {
        setMessage('Image upload failed');
        return;
      }
    }
    try {
      await axios.post('http://localhost:5000/api/services', {
        title: form.title,
        description: form.description,
        image: imageUrl
      });
      setForm({ title: '', description: '', image: '' });
      setImageFile(null);
      setMessage('Service added!');
      fetchServices();
    } catch (err) {
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Add Service</h2>
      {message && <div style={{ color: 'red', marginBottom: 10 }}>{message}</div>}
      <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: 10 }}
        />
        <button type="submit">Add Service</button>
      </form>
      <h2>Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {services.map((srv) => (
          <div key={srv._id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, width: 200 }}>
            {srv.image && <img src={srv.image.startsWith('http') ? srv.image : `http://localhost:5000${srv.image}`} alt="service" style={{ width: '100%', height: 100, objectFit: 'cover', marginBottom: 8 }} />}
            <h4>{srv.title}</h4>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
