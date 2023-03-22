import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <Box sx={{flexGrow: 1 }}>
         <AppBar position="static"> 
     <Toolbar>
             <Typography> HOME </Typography><br></br>
            <Button color='inherit' variant='contained'><Link to="/Mread" style={{color:'white'}}>View</Link></Button>
            <Button color='inherit' variant='contained'><Link to="/Movi" style={{color:'white'}}>Read</Link></Button>
         
        </Toolbar>
          </AppBar>
       </Box>
    </div>
  )
}

export default Navbar