import React, { useEffect, useState } from "react";
import "./App.css";
import {  MenuItem,FormControl, Select } from "@material-ui/core";

function App() {
 
  const[countries, setCountries ] = useState([]);
  const [country, setcountry]  = useState('worldWide');


//https://disease.sh/v3/covid-19/countries

// USEEFFECT =  RUN a piece of code     
// based of given condition

useEffect(() => {
// then code inside here will run once 
// when the component loads and not again

//Async --> send a request 

const getCountriesData = async() => {

  await fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {

    const countries = data.map((country)=> ({
      name:country.country, //India , United States
      value: country.countryInfo.iso2,// IN, USA
    }));
    setCountries(countries);
  });
};
getCountriesData();

},[]);



const onCountryChange =  async(event) =>{
  const countryCode = event.target.value;
  setcountry(countryCode);
}
  return (
    <div className="App">
        <div className="App__header">

      <h1>Covid 19 Tracker</h1>
    <FormControl className="app__dropdown">

  <Select variant="outlined" onChange={onCountryChange } value={country }>
  <MenuItem value="worldWide" >worldWide</MenuItem>

  { 
      countries.map((country) =>(
        <MenuItem value={country.value}>{country.name}</MenuItem>
        
      ))} 


  </Select>
</FormControl>
</div>
 
{/*Header*/}
{/*Title - Select Input 
dropdown field*/}

{/*InfoBoxes*/}
{/*InfoBoxex*/}
{/*InfoBoxes*/}

{/*Table*/}
{/*Graph*/}


{/*Map*/}


    </div>
  );
}

export default App;
