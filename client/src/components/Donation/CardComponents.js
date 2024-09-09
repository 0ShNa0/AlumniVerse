// Donation.js
import React from 'react';
import "../../styles/Donation/DonationCards.css"
import donationAreas from "../../utils/DonationData.js"
const DonationCard = () => {
  return (
    <div>
      <div className="donation-list">
        {donationAreas.map((donation) => (
          <div key={donation.id} className="donation-card">
            <img src={donation.image} alt={donation.title} className="donation-card__image" />
            <h3>{donation.title}</h3>
            <p>{donation.description}</p>
            <p><strong>Goal:</strong> {donation.goal}</p>
            <p><strong>Progress:</strong> {donation.progress}%</p>
            <p><strong>Suggested Donation Amount:</strong> ${donation.donationAmount}</p>
            <p><strong>Impact Metrics:</strong> {donation.impactMetrics}</p>
            {donation.urgency && <p><strong>Urgency:</strong> {donation.urgency}</p>}
            <button>Donate Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCard;
