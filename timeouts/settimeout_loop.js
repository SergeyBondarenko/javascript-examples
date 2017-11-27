/*
* Print numbers every 100 ms
*/

function printNumbersInterval() {
  let i = 1;
  const interval = 100;
  setTimeout(function tick() {
    console.log(i);
    if (i === 20) {
      return;
    }
    i++;
    setTimeout(tick, interval);
  }, interval);
}

printNumbersInterval();
