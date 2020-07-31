import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import axios from "axios";

const apiKey = "0e41f71f411f9cfaf2ff0a6ace672868";
class App extends Component {
  state = {
    maxtemp: undefined,
    mintemp: undefined,
    finalTemp: undefined,
    description: "",
    city: undefined,
    country: null,
    weather_icon: null,
  };

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`
      )
      .then((response) => {
        console.log("Hello");
        let max_temp = this.convertToDegreeCelsius(response.data.main.temp_max);
        let min_temp = this.convertToDegreeCelsius(response.data.main.temp_min);
        let final_temp = this.convertToDegreeCelsius(response.data.main.temp);
        let weather_icon = this.weatherIconNameById(
          response.data.weather[0].id
        );
        console.log(weather_icon);
        console.log(max_temp);
        this.setState({
          maxtemp: max_temp,
          mintemp: min_temp,
          finalTemp: final_temp,
          city: response.data.name,
          country: response.data.sys.country,
          description: response.data.weather[0].description,
          weather_icon: weather_icon,
        });
        console.log(response.data);
      });
  }

  convertToDegreeCelsius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  weatherIconNameById = (id) => {
    switch (true) {
      case id >= 200 && id <= 232:
        return "wi-thunderstrom";
      case id >= 300 && id <= 321:
        return "wi-sleet";
      case id >= 500 && id <= 531:
        return "wi-storm-showers";
      case id >= 600 && id <= 622:
        return "wi-snow";
      case id >= 701 && id <= 781:
        return "wi-fog";
      case id === 800:
        return "wi-day-sunny";
      case id >= 801 && id <= 804:
        return "wi-day-fog";

      default:
        return this.state.weather_icon;
    }
  };

  render() {
    return (
      <div className="App">
        <Home
          city={this.state.city}
          country={this.state.country}
          minTemp={this.state.mintemp}
          maxTemp={this.state.maxtemp}
          finalTemp={this.state.finalTemp}
          description={this.state.description}
          weatherIcon={this.state.weather_icon}
        />
      </div>
    );
  }
}

export default App;
