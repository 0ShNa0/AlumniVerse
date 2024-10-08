import React from 'react';
import { Typography } from '@mui/material';
import '../../App.css';
import Typewriter from 'typewriter-effect';
import alumniImage from '../../assets/alumni.jpeg';

const Central = () => {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <div style={{marginLeft:'5%'}}>
      <Typography
    sx={{
      fontSize: {
        xs: '40px',  
        sm: '60px', 
        md: '70px',  
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
          marginTop: '20px' ,
          color:'#00897b'
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
      </div>
     <img src={alumniImage} style={{ width: '40%', height: 'auto',marginTop:'5%',marginLeft:'5%',borderRadius:4 }}/>
      </div>
  )
}

export default Central;