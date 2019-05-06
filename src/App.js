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
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
      const data = await api_call.json();
      if(data.cod===404){
        this.setState({
          error: 'Please enter a valid City and/or Country Name'
        });
      }
      else{
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.country,
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          error: ''
        });
      }
    }
    else if (city){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
      const data = await api_call.json();
      if(data.cod===404){
        this.setState({
          error: 'Please enter a valid City and/or Country Name'
        });
      }
      else{
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: '',
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          error: ''
        });
      }
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
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>
                <div className="col-xs-7 form-container">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
