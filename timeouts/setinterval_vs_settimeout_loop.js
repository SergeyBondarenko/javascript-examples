function Runner() {
  this.steps = 0;

  this.step = function() {
    this.doSomethingHeavy();
    this.steps++;
  };

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  this.doSomethingHeavy = function() {
    for (var i = 0; i < 25; i++) {
      this[i] = fib(i);
    }
  };

}

const runner1 = new Runner();
const runner2 = new Runner();

// первый?
const t1 = setInterval(function() {
  runner1.step();
}, 15);

// или второй?
let t2 = setTimeout(function go() {
  runner2.step();
  t2 = setTimeout(go, 15);
}, 15);

setTimeout(function() {
  clearInterval(t1);
  clearTimeout(t2);
  console.log('runner 1:', runner1.steps);
  console.log('runner 2:', runner2.steps);
}, 5000);
