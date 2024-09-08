
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import {Box} from '@mui/material';
import Login from './pages/Login';
import Clusters from './pages/Clusters';
import Alumni from './pages/Alumni';
import Donation from './pages/Donation';

function App() {
  return (
     
    <Box width="450px" sx={{ width: { xl: '900px' } }} m="auto">
        
       <BrowserRouter> 
       <Header/>
        <Routes>      
        <Route exact path="/" element={<Login/>} /> 
        <Route exact path="/dashboard" element={<Dashboard/>} /> 
        <Route exact path="/alumni" element={<Alumni/>} /> 
        <Route exact path="/donation" element={<Donation/>} />  
        <Route exact path="/clusters" element={<Clusters/>} /> 
        </Routes>
      </BrowserRouter> 
      </Box>

  );
}

export default App;
