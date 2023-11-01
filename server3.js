const express = require('express');

const app = express();

app.use = ('/', (req,res) => {
    console.log('<h1>HELLLLOOOOOOO</h1>')
    next();
})
    
app.get('/', (req, res) => {
    res.send("testest");    
});
    

server.listen(3000);