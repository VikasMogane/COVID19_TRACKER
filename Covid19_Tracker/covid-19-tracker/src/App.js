import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select , card, CardContent } from "@material-ui/core";
import InfoBox from "./infoBox";
import Map from "./map";
import "./App.css";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setcountry] = useState('worldWide');
  const [countryInfo,setCountryInfo] = useState({});


  //https://disease.sh/v3/covid-19/countries

  // USEEFFECT =  RUN a piece of code     
  // based of given condition

  useEffect(() => {
    // then code inside here will run once 
    // when the component loads and not again

    //Async --> send a request 

    const getCountriesData = async () => {

      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {

          const countries = data.map((country) => ({
            name: country.country, //India , United States
            value: country.countryInfo.iso2,// IN, USA
          }));
          setCountries(countries);
        });
    };
    getCountriesData();

  }, []);



  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    //setcountry(countryCode);
    
    const url = countryCode === 'worldWide' ? 'https://disease.sh/v3/covid-19/all':
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;
 
    await fetch(url)
    .then(response => response.json())
    .then(data =>{
      setcountry(countryCode);
      // All the data from country
      setCountryInfo(data);
    })
  };
  console.log("countryInfo >>> ",countryInfo);
    //https://disease.sh/v3/ovid-19/all
    //
  
  return (
    <div className="app">
        <div className="app__left">
      <div className="app__header">

        <h1>Covid 19 Tracker</h1>
        <FormControl className="app__dropdown">

          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldWide" >worldWide</MenuItem>

            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>

              ))}


          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="coronaVirus Cases" cases={12} total={2000} />
        <InfoBox title="Recovered" cases={123} total={3000} />
        <InfoBox title="Deaths/" cases={1234} total={4000} />

      </div>




      <Map />


</div>
      <card className="app__right">
              <CardContent>
<h3>Live Cases by Country</h3>
{/*Table*/}
<h3>World Wide New Cases</h3>
 
      {/*Graph*/}

              </CardContent>

     
      </card>


    </div>
  );
}

export default App;
