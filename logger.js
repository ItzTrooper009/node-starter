const EventEmitter = require("events");

var url = "http://mylogger.abc";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("Event", { id: 1, url: url });
  }
}

function log2(message2) {
  console.log(message2);
}

module.exports = Logger;

module.exports.log2 = log2;
