
// import './App.css';
// import Dashboard from './pages/Dashboard';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Header from './components/Header';
// import {Box} from '@mui/material';
// import Login from './pages/Login';
// import Jobs from './pages/Jobs';
// import Clusters from './pages/Clusters';
// import Alumni from './pages/Alumni';
// import Donation from './pages/Donation';
// import {useState} from 'react';

// function App() {
//   const [headerVisible, setHeaderVisible] = useState(true);
//   const handleSignOut = () => {
    
//     setHeaderVisible(false); 
//   };

//   return (
     
//     <Box width="450px" sx={{ width: { xl: '900px' } }} m="auto">
        
//        <BrowserRouter> 
//        {headerVisible && <Header />}
//         <Routes>      

//         <Route exact path="/dashboard" element={<Dashboard/>} /> 
//         <Route exact path="/alumni" element={<Alumni/>} /> 
//         <Route exact path="/donation" element={<Donation/>} />  
//         <Route exact path="/clusters" element={<Clusters/>} /> 
//         <Route exact path="/jobs" element={<Jobs/>} /> 
//         {/* <Route exact path="/signIn" element={<Signup/>} /> */}
//         <Route exact path="/profile" element={<Alumni/>} />
//         <Route exact path="/" element={<Login onSignOut={handleSignOut}/>} />
//         </Routes>
//       </BrowserRouter> 
//       </Box>

//   );
// }

// export default App;

import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { Box } from '@mui/material';
import Login from './pages/Login';
import Jobs from './pages/Jobs';
import Clusters from './pages/Clusters';
import Alumni from './pages/Alumni';
import Donation from './pages/Donation';
import { useState, useEffect } from 'react';
import Signup from './pages/signUp';

function AppWrapper() {
  const location = useLocation(); 
  const [headerVisible, setHeaderVisible] = useState(true);
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname=== '/signup') {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  }, [location.pathname]);

  return (
    <>
      {headerVisible && <Header />}
      <Box width="600px" sx={{ width: { xl: '900px' } }} m="auto">
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/alumni" element={<Alumni />} />
          <Route exact path="/donation" element={<Donation />} />
          <Route exact path="/clusters" element={<Clusters />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/profile" element={<Alumni />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login onSignOut={() => setHeaderVisible(false)} />} />
        </Routes>
      </Box>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
