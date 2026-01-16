// Tire Pressure
// Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

// 1 bar equals 14.5038 psi.
// Return an array with the following values for each tire:

// "Low" if the tire pressure is below the minimum allowed.
// "Good" if it's between the minimum and maximum allowed.
// "High" if it's above the maximum allowed.

function tireStatus(pressuresPSI, rangeBar) {
  console.log(pressuresPSI, rangeBar);
  const low = rangeBar[0];
  const high = rangeBar[1];

  // convert to psi to bar
  const bars = pressuresPSI.map((x) => x / 14.5038);
  // console.log(bars)

  // results arr
  const results = bars.map((x) => {
    if (x > high) return 'High';
    if (x >= low) return 'Good';
    return 'Low';
  });

  return results;

  // return pressuresPSI;
}
