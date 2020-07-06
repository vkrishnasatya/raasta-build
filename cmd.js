#! /usr/bin/env node

const minimist = require('minimist')
const fs = require('fs');


const argv = minimist(process.argv.slice(2))
const cmd = argv._[0]

function createFile(name) {
  fs.writeFile("public/" + name,"Hello, World");
}


if(cmd == "build") {
    console.log("building");
    if(!fs.existsSync("raasta.json")) {
	console.log("JSON file doesnt exists");
	process.exit()
    }
    //fs.copyFileSync("node_modules/raasta-build/server.js",  "public/server.js");
} else if(cmd == "help") {
    console.log("Raasta Build");
    console.log("build - to build project ");
}

