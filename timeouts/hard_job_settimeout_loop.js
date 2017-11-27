let i;
let interval = 10;
let timer = 5; 
setTimeout(function tick() {
  if (!timer) {
    console.log(i);
    return;
  }
  i++;
  timer--;
  setTimeout(tick, interval);
}, interval);

// и запускаем тяжёлую функцию
function f() {
  // точное время выполнения не играет роли
  // здесь оно заведомо больше 100 мс
  for (i = 0; i < 1e8; i++) f[i % 2] = i;
}

f();
