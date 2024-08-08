// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }} >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Online Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About Me</Button>
        <Button color="inherit" component={Link} to="/education">Education</Button>
        <Button color="inherit" component={Link} to="/experience">Experience</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
