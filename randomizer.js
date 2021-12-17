function randomizer(...callbacks) {
  let n = callbacks.length;
  let end = 2 * n * 1000;
  let count = 1;
  let timeLogger = setInterval(() => {
    console.log(count);
    count++;
    if (count >= end/1000) clearInterval(timeLogger);
  }, 1000);
  callbacks.forEach(callback => setTimeout(callback, Math.random() * end));
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6