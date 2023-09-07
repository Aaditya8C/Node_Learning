const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Calculate', () => {
  console.log('an event occurred!');

  setTimeout(() => {
    console.log("an event again occurs.This is reminder");
  }, 3000);
});
myEmitter.emit('Calculate');