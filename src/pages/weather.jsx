import React from 'react';
import  m3o from '@m3o/m3o-node' ;
import '../styles/Weather.css';
export default function Weather() {
    
        
            const [location, setLocation] = React.useState("");
            const [result, setResult] = React.useState(null);
          
            const fetchWeather = () => {
              new m3o.Client({
             token: 'NDExZmQzZGEtYWY1NS00MDFkLWE5YmUtYzAwMWE1ZmY0NmFi' 
            })
            .call('weather', 'Now', {
              
              "location": location
          })
            .then((response) => {
              console.log(response);
              setResult({
                location: response.location,
                condition: response.condition,
                temp: response.temp_c
                 
              });
          });
            };
    
    return (
      <div className="main-weather">
        
        
        
          <div className="welcome">
          <h1>Welcome To Our Forecast System</h1>
        
          <div className="info">
            <h2>Enter The City Please</h2>
        <input
        value={location}
        onChange={(e)=>{
          setLocation(e.target.value);
        }}
        type="text"
        />
        <button onClick={fetchWeather}>Enter</button>
       
        {result ? (
          <div className="answer">
              
             <h1>The City: {result.location}</h1> <br /><br />
             <h2>Temperature: {result.temp} C</h2>
             <h3>Condition: {result.condition}</h3>
          </div>
        ) :null}
          
       
       
      </div>
      </div>
      </div>
    )
}
       