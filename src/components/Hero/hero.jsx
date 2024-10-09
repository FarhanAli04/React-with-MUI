import React from 'react';
import { Container, Typography, Button, Box, Grid2 } from '@mui/material';
import heroImg from '../assests/Illustration.png'

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5,  }}>
      <Grid2 container spacing={4}  display=  "flex" justifyContent= "space-between" alignItems="center">
        <Grid2 item xs={12} md={6}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            Lessons and insights <br /> 
            from <span style={{ color: '#4CAF50' }}>8 years</span>
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Where to grow your business as a photographer: site or social media?
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 4 }}
          >
            Register
          </Button>
        </Grid2>
        
        <Grid2 item xs={12} md={6}>
          <Box
            component="img"
            src={heroImg} 
            alt="Illustration"
            sx={{ width: '100%', maxHeight: '400px' }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HeroSection;
