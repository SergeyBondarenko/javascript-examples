/*
* Print numbers every 100 ms
*/

function printNumbersInterval() {
  let i = 1;
  const timer = setInterval(function () {
    console.log(i);
    if (i === 20) {
      clearInterval(timer);
    }
    i++;
  }, 100); 
}

printNumbersInterval();
