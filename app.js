//to keep the  terminal clear
console.clear();

//Initializtions
const bToGb = Math.pow(10, 9);

// const log = require("./logger");

// //Path
// const path = require("path");
// const pathObj = path.parse(__filename);
// console.log(pathObj.ext === ".js" ? "Javascript" : "Not javascript");

// //OS
// const OS = require("os");
// console.log(OS.hostname().includes("lenovo") ? "This is Lenovo" : "Not lenovo");
// console.log("Free Memory in Gb-", OS.freemem() / bToGb);
// console.log("Total Memory in Gb-", OS.totalmem() / bToGb);

// //File System
// const fs = require("node:fs");
// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error ", err);
//   else console.log("Files ", files);
// });

// //Events
// const EventEmitter = require("events");
// const Logger = require("./logger");
// const logger = new Logger();
// //Regustering a listener
// logger.on("Event", (arg) => {
//   console.log("Event listener called", arg);
// });
// logger.log("Hello There");

//HTTP

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello there");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

server.listen(2023);
console.log("Listening on port 2023");
