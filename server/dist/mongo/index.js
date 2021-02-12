"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var uri = 'mongodb://ashish:ashish@localhost:27017';
var client = new mongodb_1.MongoClient(uri, {
    useUnifiedTopology: true,
    authSource: "admin"
});
exports.default = client;
