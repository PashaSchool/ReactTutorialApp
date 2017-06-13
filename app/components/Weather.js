import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'

import OpenWeatherMap from '../util/openWeatherMap'


class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {

    this.setState({isLoading: true});
    OpenWeatherMap.getTemp(location).then(
      temp => {
        this.setState({
          location: location,
          temp: temp,
          isLoading: false
        })
      },
      error => {
        this.setState({isLoading: false});
        alert("No city");
      }
    )
  }
  render() {
    let {isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Featching data...</h3>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    return (
      <div className='weather-container'>
        <h1> Get weather </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <div>
          {renderMessage()}
        </div>
      </div>
    )
  }
}

module.exports = Weather;
