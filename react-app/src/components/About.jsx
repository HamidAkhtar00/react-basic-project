// src/components/About.jsx
import React from 'react';

import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container >
      <Typography variant="h2" gutterBottom>About Me</Typography>
      <Typography variant="body1">This is the About Me page.</Typography>
    </Container>
  );
};

export default About;
