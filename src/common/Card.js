import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function card(props) {
  return (
    <>
        <Card sx={{ maxWidth: 345, backgroundColor: 'lightblue' , textAlign: 'center' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{
            fontWeight: '700',
        }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant="contained" href = {props.link} size="small" sx={{
            marginLeft: "33%",
            fontSize: "12px",
            marginBottom: "15px"
        }}>Login Now</Button>
      </CardActions>
    </Card>
    </>
  )
}
