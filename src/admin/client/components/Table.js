import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

  
  const rows = [
    {
        name: 'Amit Pile',
        mail_id: 'xyz@gmail.com',
        number: '91+ 999999999',
        department: 'IT',
        password: '123456',
    }, 
    
    {
        name: 'Anmol ',
        mail_id: 'xyz@gmail.com',
        number: '91+ 999999999',
        department: 'IT',
        password: '123456',
    }, 
    
    {
        name: 'Amit Pile',
        mail_id: 'xyz@gmail.com',
        number: '91+ 999999999',
        department: 'IT',
        password: '123456',
    }, 
    
    {
        name: 'Amit Pile',
        mail_id: 'xyz@gmail.com',
        number: '91+ 999999999',
        department: 'IT',
        password: '123456',
    }, 
    
    {
        name: 'Amit Pile',
        mail_id: 'xyz@gmail.com',
        number: '91+ 999999999',
        department: 'IT',
        password: '123456',
    },

    

  ];


export default function table() {
  return (
    <>
    <TableContainer component={Paper}
        sx={{
            border: '1px solid black',
            maxWidth: '1500px',
            display: 'flex',
            margin: 'auto',
            marginTop: '50px',
        }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Mail Id</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.mail_id}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" 
                onClick={()=>{
                    console.log('Deactivated');
                }}>
                    Deactivate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
