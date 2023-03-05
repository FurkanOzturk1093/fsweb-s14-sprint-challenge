// serverı buraya yazın ve index.js require yazın
const express = require("express");

const server = express();
const projectRouter = require("../api/project/router");
const resourceRouter = require("../api/resource/router");
const taskRouter = require("./task/router");

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);

module.exports = server;
