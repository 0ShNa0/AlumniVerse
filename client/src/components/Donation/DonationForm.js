import React, { useState } from 'react';

import "../../styles/Donation/DonationForm.css"

const DonationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    image: '',
    urgency: '',
    contactName: '',
    contactEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display it
    console.log('Donation Request Submitted:', formData);
    // Reset form fields
    setFormData({
      title: '',
      description: '',
      goal: '',
      image: '',
      urgency: '',
      contactName: '',
      contactEmail: '',
    });
  };

  return (
    <div className="donation-form">
      <h2>Request for Donation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Cause Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="goal">Donation Goal (in $):</label>
          <input
            type="number"
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="urgency">Urgency Message:</label>
          <input
            type="text"
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactName">Contact Name:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default DonationForm;
