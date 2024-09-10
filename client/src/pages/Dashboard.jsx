import React,{useState} from 'react';
import CardComponent from '../components/Dashboard/CardComponent';
import Central from '../components/Dashboard/Central';
import { NewsData } from '../utils/NewsData';
import NewsComponent from '../components/Dashboard/NewsComponent';
import { Container } from '@mui/material';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
const Dashboard = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === NewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? NewsData.length - 1 : prevIndex - 1
    );
  };
  return (  <>
      <Central />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CardComponent phrase="Registered Members" count={400} />
        <CardComponent phrase="Countries Strong Base" count={45} />
        <CardComponent phrase="Outreach Events" count={80} />
        <CardComponent phrase="Memories" count={200} />
      </div>
      <Container sx={{display:'flex',alignItems:'center'}}>
      <ArrowCircleLeftSharpIcon onClick={handlePrevious}  fontSize="large" margin="auto"/>
      <NewsComponent
       image={NewsData[currentIndex].image}
        heading={NewsData[currentIndex].heading}
        newsitem={NewsData[currentIndex].newsitem}
      />
  <ArrowCircleRightSharpIcon onClick={handleNext}  fontSize="large"  margin="auto"/>
     
    </Container>
      
    </>

  )
}

export default Dashboard;