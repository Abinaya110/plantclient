import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fanimg from "./fanimg.jpg"
import fanrun from "./fanrun.jpg"
import { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
export default function MediaCard() {
    const [lit1,setLit1]=useState(false)
    const [checked, setChecked] =useState(false);
 

    const handleChange = (event) => {
      setChecked(event.target.checked);
  
  if (!checked){
    console.log("not automated")
    fetch("http://127.0.0.1:5000/fan_automateon", {
      method: 'POST',
      body: JSON.stringify({ state:"nautomate" }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
       
  }
  else{
    console.log("automated") 
    fetch("http://127.0.0.1:5000/fan_automateoff", {
      method: 'POST',
      body: JSON.stringify({ state:"automate" }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }
    
  }
   
  

    const lighton=()=>{
        setLit1(true)
        fetch("http://127.0.0.1:5000/fan_on", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: {"content":"fan_on"},
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });




    }
    const lightoff=()=>{
        setLit1(false)
        fetch("http://127.0.0.1:5000/fan_off", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: {"content":"fan_off"},
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        
        
        
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={fanimg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fan   <Switch
      checked={checked}      
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button color='success' variant='contained' disabled={lit1} size="small" onClick={lighton}>On</Button>
        <Button color='error' variant='contained' disabled={!lit1} onClick={lightoff}>Off</Button>
      </CardActions>
    </Card>
  );
}