
import './App.css';
import { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Light1 from './Light1';
import MyTable from './MyTable';
import Fan from './Fan';
function App() {
  const [checked, setChecked] =useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);

if (!checked){
  fetch("http://127.0.0.1:5000/all_automateon", {
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
  fetch("http://127.0.0.1:5000/all_automateoff", {
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
   
  return (
    <div className="App">
      <Switch
      checked={checked}



      
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <header className="App-header">
       { checked ? 
       <div>
<Light1/>
<br/>
<Fan/>
       </div> :
       <div style={{height:"100vh",paddingTop:"100px"}}>
        Everything is automated
       </div>


       }

       <br/>
       <MyTable/>
      </header>
    </div>
  );
}

export default App;

