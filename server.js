
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', function(req,res){
    res.end("Hello, World");
})

module.exports.handler = serverless(app);




