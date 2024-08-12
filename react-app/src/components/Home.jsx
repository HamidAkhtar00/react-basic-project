// src/components/Home.jsx
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import bgImage from '../assets/1.png';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Hello !!!
        </Typography>
        <Typography variant="h2" gutterBottom>
          I'm Hamid Akhtar
        </Typography>
        <Typography variant="h4" gutterBottom>
          React Developer 
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam nec nibh.
        </Typography>
        <Typography variant="body2" paragraph>
          Portfolio 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
