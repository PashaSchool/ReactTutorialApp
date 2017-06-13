import React from 'react'


class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <input type={this.props.type} ref={location => this.location = location} placeholder={this.props.placeholder} className='inputfield'/>
    )
  }
}
const InputBtn = (props) => {
  return (
    <input type={props.type} value={props.value} className='inputfield btn' />
  )
}

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmut = this.onFormSubmut.bind(this);
  }
  onFormSubmut(e) {
    e.preventDefault();
    let location = this.getWeather.location.value;

    if(location.length > 0) {
      this.getWeather.location.value = '';
      this.props.onSearch(location)
    }
  }
  render() {
    return (
      <form  className='get_weather_form' onSubmit={this.onFormSubmut}>
        <Input
        type='text'
        ref={(input) => {this.getWeather = input}}
        placeholder='Get wether...'/>

        <InputBtn
          type='submit'
          value="get weather"
        />
      </form>
    )
  }
}

module.exports = WeatherForm;
