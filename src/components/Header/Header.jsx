import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import logoImg from '../assests/Logo.png'
import React from 'react';


function Header() {
  return (
   <>
    <Box sx={{  }}>
      <AppBar position="static" color='white'>

        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <img src={logoImg} alt="" />
         
          <Box sx={{display:"flex"}}>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color: "black"}}>Home</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color: "black"}}>Service</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color: "black"}}>Feature</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color: "black"}}>Product</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color: "black"}}>Testimonial</Typography>
             </Link>
          <Link href="#" underline="none">
             <Typography variant="body1" sx={{padding: 2, color: "black"}}>FAQ</Typography>
             </Link>
          </Box>

          <Box>
          <Button variant="body1" >Login</Button>
          <Button variant="body1" sx={{ backgroundColor: "green", color: "white"}} >Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Header;