import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar className="header" position="static">
      <Toolbar>
        <div className="header-left">
          <div className="logo">kimmy</div>
          {/* <IconButton edge="start" color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton> */}
        </div>
        <div className="header-center">
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
