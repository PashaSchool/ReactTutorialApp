import React from 'react'

const WeatherMessage = ({location, temp}) => {
  return <h3> it is {temp} in the {location}</h3>;
}
module.exports = WeatherMessage;
