const express = require("express");
const server = express();
const router = require("./users/users-router");

server.use(express.json());

server.get("/", (req, res) => {
    console.log("Get request...");
    res.json({message: "Welcome back!"});
});

server.use("/api", router);

module.exports = server;