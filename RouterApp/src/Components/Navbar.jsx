import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Demo Site
          </Typography>
          <Button color="inherit" endIcon={<ExitToAppIcon />}><Link className="redirect" to="/Login">SignOut</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
