const fs = require('fs');

const dataBuffer = fs.readFileSync('1-firstJson.json')
const filedata = dataBuffer.toString();
const data = JSON.parse(filedata)
console.log(data);