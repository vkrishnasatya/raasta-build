const minimist = require('minimist')


const argv = minimist(process.argv.slice(2))
const cmd = argv._[0]

if(cmd == "build") {
    console.log("building");
} else if(cmd == "help") {
    console.log("Raasta Build");
    console.log("build - to build project ");
}

 
