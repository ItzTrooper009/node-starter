var url = "http://mylogger.io/log";

// console.log("File", __filename);
// console.log("Dir", __dirname);
// console.log("Mod", module);
console.table([
  { a: 1, b: "Y" },
  { a: "Z", b: 2 },
  { a: "Z", b: 5 },
  { a: "Z" },
  { b: 5 },
]);

function log(message) {
  console.log(message);
}

module.exports = log;
