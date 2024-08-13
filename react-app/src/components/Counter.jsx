import React, { useEffect, useState } from 'react';
import { Card, Grid, Box, Button, Typography } from '@mui/material';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count : ${count}`)
  }, [count]);
  
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);

  };
  
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'transparent' }}>
      <Card sx={{ maxWidth: 300, textAlign: 'center', p: 3, bgcolor:'gray'}}>
        <Typography variant="h5" component="div" gutterBottom 
        sx={{color:'white'}}
        >
          Counter: {count}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={decrement}>
              Decrement
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={increment}>
              Increment
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CounterApp;
