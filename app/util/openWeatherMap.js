const axios = require('axios');

const API_KEY = '&appid=cda220bfa0904411b6a1be1f8826d77d';
const UNIT_FORMAT = '&units=metric';
const OPEN_WETHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
module.exports = {
  getTemp: function(location) {
    let encodeLocation = encodeURIComponent(location);
    let requestURL = `${OPEN_WETHER_MAP_URL}q=${encodeLocation}${API_KEY}${UNIT_FORMAT}`;
    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function(ErrRes) {
      throw new Error(ErrRes.data.message)
    })
  }
}
