//NODE Dependencies
const http = require('http');

//3rd Dependencies
const express = require('express');

//Main
const app = express();

const server = http.createServer(app);
server.listen(3000);
