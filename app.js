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
// console.log(OS.hostname());
// console.log(OS.platform());
// console.log("Free Memory in Gb-", OS.freemem() / bToGb);
// console.log("Total Memory in Gb-", OS.totalmem() / bToGb);

// //File System
// const fs = require("node:fs");
// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error ", err);
//   else console.log("Files ", files);
// });

// //Events
// const EventEmitter = require("events"); //not needed now because new inported class is child of Emmiter
// const Logger = require("./logger");
// const logger = new Logger();
// //Regustering a listener
// logger.on("Event", (arg) => {
//   console.log("Event listener called", arg);
// });
// Logger.log2("Message 2"); //Fn Outside Emmiter Child
// logger.log("Hello There");

// //Event Emmiter
// const EventEmitter = require("events");
// const emmiter = new EventEmitter();
// console.log(emmiter);

const PORT = 3000;
const OS = require("os");

// //HTTP
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello there");
//     res.end();
//   }

//   if (req.url === "/api/cpu") {
//     res.write(JSON.stringify(OS.cpus()));
//     res.end();
//   }
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello There");
});

app.get("/api/cpu", (req, res) => {
  res.send(OS.cpus());
});

// server.on("connection", (socket) => {
//   console.log(`New Connection...`);
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
