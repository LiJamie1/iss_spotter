const { nextISSTimes } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const time of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
};

nextISSTimes()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
