import React, { Component } from 'react';
import axios from 'axios';
import countries from 'i18n-iso-countries';

import Card from './components/Card/Card';
import './App.css';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/es.json"));

class App extends Component {
  state = {
    city: null,
    country: null,
    temperature: null,
    main: null,
    lat: null,
    lon: null
  };

  componentDidMount() {
    //Check if browser supports geolocation
    if ("geolocation" in navigator) {
      //Get geolocation
      navigator.geolocation.getCurrentPosition(pos => {
        //Make request to the API with the geolocation info
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=3a30e9bc6c06dd36751eaf155d19be28`)
          .then(response => {
            const data = response.data;
            const country = countries.getName(data.sys.country, "es").toUpperCase();

            this.setState({
              temperature: data.main.temp.toFixed(0),
              main: data.weather[0].main,
              city: data.name,
              country: country
            });
            console.log(response);
        })
        .catch(error => alert(error.message));
      }, error => {
        //If an error ocurred when getting geolocation
        alert(error.message);
      });
    }
    //If browser does not support geolocation show this message
    else {
      alert("Your browser does not support Geolocation. Please search your city.");
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Weather</h2>
        <Card weather={this.state}></Card>
      </div>
    );
  }
}

export default App;
