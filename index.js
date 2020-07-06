const fs = require('fs');

function getConfig() {
    let jsonFile = fs.readFileSync('raasta.json','utf8');
    let json = JSON.parse(jsonFile);
    return json;
 }

module.exports.getConfig = getConfig;
