import React, { useState } from 'react'
import DonationCard from '../components/Donation/CardComponents.js';
import DonationForm from '../components/Donation/DonationForm.js';

import "../styles/Donation/main.css"

const Donation = () => {
  const [Form,showForm]=useState(false);
  return (
    <div>
      
      <h1>Donate to a Cause</h1>
      <DonationCard/>
      <button className='apply-button' onClick={()=>showForm(true)}>
        Apply for Donation
      </button>
      {Form && <DonationForm/>}

    </div>
  )
}

export default Donation;