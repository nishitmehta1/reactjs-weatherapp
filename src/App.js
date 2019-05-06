import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'a7e02dcbcafc861fad98a10782f4b942';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      desc: '',
      error: ''
    }
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
      const data = await api_call.json();
      this.setState({
        temperature: data.main.temp,
        city: city,
        country: country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: ''
      });
    }
    else{
      this.setState({
        error: 'Please enter City and Country'
      });
    }
  }

  render(){
    return (
      <div>
        Weather App
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          desc={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
