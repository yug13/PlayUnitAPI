const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('Content-Type','text/html');
    response.end('<h1>asfsadf</h1>');
})

server.listen(3000);