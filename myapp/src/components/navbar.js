import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import  './nav.css'



function ResponsiveAppBar() {


 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <nav>
        <NavLink to={'/'} > Home</NavLink>
        <NavLink to={'/register'}> Register</NavLink>
        <NavLink to={'/information'}>UserInformation</NavLink>
        </nav>
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;