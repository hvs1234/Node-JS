const http = require('http');
http.createServer((req,res) => {
    res.write('Hello this is node js learning');
    res.end();
}).listen(4500);