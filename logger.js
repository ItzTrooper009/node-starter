const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("Event", { id: 1, url: url });
  }
}

module.exports = Logger;
