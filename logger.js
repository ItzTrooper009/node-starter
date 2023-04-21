var url = "http://mylogger.io/log";

console.log("File", __filename);
console.log("Dir", __dirname);

function log(message) {
  console.log(message);
}

module.exports = log;
