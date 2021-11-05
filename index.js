const { nextISSTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(('INSERT IP HERE'), (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coords:', coords);
// });

// fetchISSFlyOverTimes('INSERT COORDS HERE', (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });

nextISSTimes((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!

  for (const time of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`)
  }
});