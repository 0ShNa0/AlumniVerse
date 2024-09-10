
  import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography, Stack, IconButton, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery, useTheme } from '@mui/material'; 
import { Link } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Paper elevation={3} style={{ position: 'sticky', top: 0, zIndex: 999 }}>
      <AppBar position="static" elevation={8} sx={{ width: '100%', bgcolor: '#00897b', boxShadow: 'initial' }}>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%', px: '20px', mb: '20px', mt: '20px' }}
          >
            <Typography component="div" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Playfair Display',fontSize:'25px' }}>
              ALUMNIVERSE
            </Typography>
            {isMobile ? (
              <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon sx={{ color:'black' }} />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={2}>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display',fontSize:'22px' }}>
                  DashBoard
                </Link>
                <Link
                  to="/alumni"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' ,fontSize:'22px'}}
                >
                  Alumni
                </Link>
                <Link
                  to="/donation"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display',fontSize:'22px' }}
                >
                  Donation
                </Link>
                <Link
                  to="/clusters"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' ,fontSize:'22px'}}
                >
                  AlumCluster
                </Link>
                <Link
                  to="/jobs"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' ,fontSize:'22px'}}
                >
                 Jobs
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: '#212121', fontFamily: 'Playfair Display' ,fontSize:'22px'}}
                >
                  SignOut
                </Link>
                
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div style={{ width: '250px' }}>
          <List>
            <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClose}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/alumni" onClick={handleDrawerClose}>
              <ListItemText primary="Alumni" />
            </ListItem>
            <ListItem button component={Link} to="/donation" onClick={handleDrawerClose}>
              <ListItemText primary="Donation" />
            </ListItem>
            <ListItem button component={Link} to="/clusters" onClick={handleDrawerClose}>
              <ListItemText primary="AlumCluster" />
            </ListItem>
            <ListItem button component={Link} to="/jobs" onClick={handleDrawerClose}>
              <ListItemText primary="Jobs" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </Paper>
  );
};


export default Header;