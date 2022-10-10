import React from 'react'
import Navbar from '../admin/client/components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from './Card';

export default function Landing() {
  return (
    <>
        <Navbar title="Employee Tracker Portal"/>
        <Box>
            <Typography sx={{
                textAlign: 'center',
                marginTop: 4,
                fontSize: 40,
                fontWeight: '500',
                fontfamily: "sans-serif",
            }}>
                Welcome to Employee Tracker Portal<br/>
                Please login to continue
            </Typography>
        </Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '70%',
            margin: 'auto',
            marginTop: '50px',
        }}>
            <Card title="Admin Login" description = "Admin Login for the manager of your a particular team / Department" link = "/admin-login"/>
            <Card title= "Employee Login" description = "Employee Login for the team members / group leaders / department members" link = "/employee-login"/>

        </Box>
    
    </>
  )
}
