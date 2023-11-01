const http = require('http');

const server = http.createServer(() => {
    console.log('I hear you!. thanks for the request')
})
    
server.listen(3000);