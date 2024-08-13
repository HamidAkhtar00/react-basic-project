// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static"  >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About Me</Button>
        <Button color="inherit" component={Link} to="/education">Education</Button>
        <Button color="inherit" component={Link} to="/experience">Experience</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/Counter">Counter</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
