import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  // const appbatStyle={ text}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"83cbe3"}}>
        <Toolbar>
          <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 100}} >
            Welcome to the Google Keep Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
