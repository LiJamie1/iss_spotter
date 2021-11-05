const request = require('request-promise-native');

// fetch ip
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json')
};

// // fetch coords by ip
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${ip}`)
};

// fetch flyover times
const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body)
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
};

// nextISSTimes
const nextISSTimes = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data)
    return response
  })
}
module.exports = { nextISSTimes };