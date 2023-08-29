const express = require("express");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.emit("messageLogged");
const app = express();

app.listen(3000);

// app.get("/", (req, res)=>{

// });
