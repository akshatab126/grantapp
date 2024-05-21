import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#f5f5f5', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Typography variant="h5" style={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: '#000000' }}>
          Grant Genius
        </Typography>
        <div style={{ flexGrow: 1 }}></div> {/* This empty div pushes the buttons to the right */}
        <Button color="inherit" component={Link} to="/" style={{ fontFamily: 'Montserrat, sans-serif', color: '#333333' }}>Home</Button>
        <Button color="inherit" component={Link} to="/explore" style={{ fontFamily: 'Montserrat, sans-serif', color: '#333333' }}>Explore</Button>
        <Button color="inherit" component={Link} to="/about" style={{ fontFamily: 'Montserrat, sans-serif', color: '#333333' }}>About</Button>
        <Button color="inherit" component={Link} to="/login" style={{ fontFamily: 'Montserrat, sans-serif', color: '#333333' }}>Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;