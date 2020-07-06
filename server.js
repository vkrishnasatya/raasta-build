#! /usr/bin/env node
const express = require('express');
const raasta = require('raasta-build');
const app = express();

const config = raasta.getConfig();

app.use(express.static('static'));

for(page in config.pages) {
    app.get(pages[page].path, function(req,res){
        req.send("Hello, World");
    });
}

app.listen(process.env.PORT || 3000, () => "server is running")




