"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var app = express_1["default"]();
var PORT = 5000;
morgan_1["default"]("tiny");
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
