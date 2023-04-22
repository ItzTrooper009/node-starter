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
// // console.log(fs.readdirSync("./"));
// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error ", err);
//   else console.log("Files ", files);
// });

const EventEmitter = require("events");
const emmiter = new EventEmitter();

emmiter.on("Event", function () {
  console.log("Hello there");
});
//Emmiter
emmiter.emit("Event");
