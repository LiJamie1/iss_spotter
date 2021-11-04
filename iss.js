const request = require('request');
// fetch ip
// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) {
//       callback(error);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     const IP = JSON.parse(body);
//     callback(null, IP);
//   });
// };

// fetch coords by ip
// const fetchCoordsByIP = function(ip, callback) {
//   request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
//     if (error) {
//       callback(error);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching Coords. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     const { latitude, longitude } = JSON.parse(body)
//     callback(null, { latitude, longitude })
//   });
// };

// fetch flyover times
const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS fly over times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};

module.exports = { fetchISSFlyOverTimes };
// fetchMyIP
// fetchCoordsByIP