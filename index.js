
function getConfig() {
    let jsonFile = fs.readFileSync('raasta.json','utf8');
    let json = JSON.parse(jsonFile);
    return json;
 }

moduel.exports.getConfig = getConfig;
