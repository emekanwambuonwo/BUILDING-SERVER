const http = require('http');

const server = http.createServer((request,response) => {
    response.setHeader('content-Type', 'text/html');
    response.end('<h1>Helloooooo</h1>');

})
    
server.listen(3000);