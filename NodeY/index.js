const http = require('http');
let port = 5500;

const myReq = http.createServer((req, res) => {
            res.write("welcome to Node.js Learning System")
            res.end();
})

myReq.listen(port);