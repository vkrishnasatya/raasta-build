#! /usr/bin/env node

const minimist = require('minimist')
const fs = require('fs');

const argv = minimist(process.argv.slice(2))
const cmd = argv._[0]

function createFile(name) {
  fs.writeFile("public/" + name);
}

if(cmd == "build") {
    console.log("building");
    
    let jsonFile = fs.readFileSync('raasta.json');
    console.log(jsonFile);
    fs.mkdir('public/');
    	
    	
} else if(cmd == "help") {
    console.log("Raasta Build");
    console.log("build - to build project ");
}

 
