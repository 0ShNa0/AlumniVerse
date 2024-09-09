import React from 'react';
import NumberCounter from './NumberCounter';
import { Card,CardContent,Box, Typography } from '@mui/material';

const CardComponent = ({phrase,count}) => {
  return (
    <Box sx={{ maxWidth: {sx:'20%' ,md:'20%' ,lg:'30%'},
    paddingLeft:{sx:'10px',md:'30px',lg:'50px'},
    paddingTop: {sx:'6px',md:'22px',lg:'40px'}
    }}>
    <Card variant="outlined" sx={{backgroundColor:'white',borderRadius:3}}>
    <CardContent>
        <div style={{display:'flex',alignItems:'center'}}>
        <NumberCounter endNumber={count} duration={2000}/> 
        <Typography sx={{ textDecoration: 'none', color: '#00897b', fontFamily: 'Playfair Display' ,fontSize:'22px', marginLeft:'12px'}}>
            {phrase} </Typography>
       </div>
        </CardContent>
    </Card>
  </Box>
  )
}

export default CardComponent;