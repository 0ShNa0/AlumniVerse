import React from 'react';
import {Card,CardContent,Typography,CardHeader } from '@mui/material';
import '../../App.css';

const NewsComponent = ({newsitem,heading}) => {
  return (   
<Card
variant="outlined"
sx={{
  backgroundColor: '#80cbc4',
  borderRadius: 1,
  color: 'black',
  width: '90%',
  margin: 'auto', 
  marginTop:{sx:'0.008%',md:'0.4%',lg:'4%'},
  maxHeight:"28vw"
}}
>

<Typography  sx={{
      textDecoration:'text-decoration-line',
      color: 'white',
      fontFamily: 'IBM Plex Serif',
      fontSize: '22px',
      padding:{ sx:'0.005%',md:'0.05%',lg:'0.5%'},
      display:'flex',
      justifyContent:'center'

    }}>
      {heading}
    </Typography>
    <div styles={{backgroundColor:'white'}}>
  <Typography
    sx={{
      textDecoration: 'none',
      color: 'black',
      fontFamily: 'EB Garamond',
      fontSize: '20px',
      marginTop:{sx:'0.002%',md:'0.2%',lg:'2%'},
      padding:{ sx:'0.005%',md:'0.05%',lg:'0.5%'}
    }}
  >
    {newsitem}
  </Typography>
  </div>
</Card>
);
};
export default NewsComponent;