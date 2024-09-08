import React from 'react'
import { Typography } from '@mui/material';
import '../App.css';
import Typewriter from 'typewriter-effect';

const Dashboard = () => {
  return (
  <>
<Typography
  sx={{
    fontSize: {
      xs: '12px',  
      sm: '30px', 
      md: '40px',  
      lg: '150px'  
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    mt:{
      xs: '6px',  
      sm: '10px', 
      md: '20px',  
      lg: '30px'  
    },
 
    fontFamily:'Bebas Neue'
  }}
>
    AlumniVerse
   </Typography>

           <Typography
      sx={{
        fontFamily: 'Lobster', 
        fontSize: { xs: '20px', sm: '30px', md: '40px', lg: '50px' }, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: '20px' 
      }}
    >
      <Typewriter
        options={{
          strings: ['Your Network','Your World'],
          autoStart: true,
          loop: true,
          delay: 75,
          cursor: '_'
        }}
      />
    </Typography>
   </>
  )
}

export default Dashboard;