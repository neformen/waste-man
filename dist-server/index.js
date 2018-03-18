"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../dist')));
app.use('*', express.static(path.join(__dirname, './../dist')));
app.listen(port);
console.log("Server running on port " + port);
//# sourceMappingURL=index.js.map