import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const NumberCounter = ({ endNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  
    const increment = endNumber / (duration / 100);
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = Math.ceil(prevCount + increment);
        if (newCount >= endNumber) {
          clearInterval(interval);
          return endNumber;
        }
        return newCount;
      });
    }, 100); 
    return () => clearInterval(interval);
  }, [endNumber, duration]);

  return (
    <Typography sx={{ textDecoration: 'none', color: 'black', fontFamily: 'Playfair Display' ,fontSize:'22px'}}>
      {count}+
    </Typography>
  );
};

export default NumberCounter;