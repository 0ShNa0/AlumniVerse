import React from 'react';
import {Card,CardContent,Typography,CardHeader } from '@mui/material';
import '../../App.css';

const NewsComponent = ({newsitem,heading,image}) => {
  return (   
<Card
variant="outlined"
sx={{
  backgroundColor: '#80cbc4',
  borderRadius: 1,
  color: 'black',
  width: '90%',

  marginTop:{sx:'0.008%',md:'0.4%',lg:'4%'},

  marginBottom:{sx:'0.008%',md:'0.4%',lg:'4%'},
  maxHeight:{sx:"40vw",md:"30vw",lg:"20vw"},
  display:'flex'
}}
>
<img src={image} style={{width:'40%'}}/>
<div style={{marginLeft:'1%'}}>
<Typography  sx={{
      textDecoration:'text-decoration-line',
      color: 'white',
      fontFamily: 'IBM Plex Serif',
      fontSize:{ sx:'12px',md:'14px',lg:'20px'},
      padding:{ sx:'0.02%',md:'0.1%',lg:'0.9%'},
      display:'flex',
      justifyContent:'center',
      margin:'auto',
     

    }}>
      {heading}
    </Typography>
    <div styles={{backgroundColor:'white'}}>
  <Typography
    sx={{
      textDecoration: 'none',
      color: 'black',
      fontFamily: 'EB Garamond',
      fontSize: { sx:'10px',md:'12px',lg:'18px'},
      marginTop:{sx:'0.002%',md:'0.2%',lg:'2%'},
      padding:{ sx:'0.005%',md:'0.05%',lg:'0.5%'}
    }}
  >
    {newsitem}
  </Typography>
  </div>
  </div>
</Card>
);
};
export default NewsComponent;