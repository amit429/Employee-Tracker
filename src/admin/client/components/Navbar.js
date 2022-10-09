import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Avatar, Typography } from '@mui/material';

export default function Navbar(props) {
  return (
    <>
        <AppBar position="static" sx={{
            padding: '20px',
            backgroundColor: 'purple',
            display: 'flex',
            flexDirection: 'row',
        }}>
           <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
               {props.title}
           </Typography>

           <Avatar alt="Amit Pile" sx={{
                marginRight: '20px',
                backgroundColor: 'orange',
                padding: '5px',
           }}>
                AP
           </Avatar>
        </AppBar>
    </>
  )
}
