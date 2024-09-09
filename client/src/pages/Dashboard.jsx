import React from 'react';
import CardComponent from '../components/Dashboard/CardComponent';
import Central from '../components/Dashboard/Central';

const Dashboard = () => {
  return (
  <>
    <Central/>
    <div style={{display:'flex',alignItems:'center'}}>
    <CardComponent phrase="Registered Members" count={400}/>
    <CardComponent phrase="Countries Strong Base" count={45}/>
    <CardComponent phrase="Outreach Events" count={80}/>
    <CardComponent phrase="Memories" count={200}/>
    </div>
   </>
  )
}

export default Dashboard;