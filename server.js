#! /usr/bin/env node
const express = require('express');
const raasta = require('raasta-build');
const hbs = require('hbs');
const app = express();

const config = raasta.getConfig();

app.set('view engine', 'hbs');
app.use(express.static('static'));

for(page in config.pages) {
    app.get(config.pages[page].path, function(req,res){
        res.render(config.pages[page].template);  
    });
}

app.listen(process.env.PORT || 3000, () => "server is running")




