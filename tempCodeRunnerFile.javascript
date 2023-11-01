const express = require('express');

const app = express();

app.get = ('/', (req,res) => {
    res.send("getting root");
});
    app.get('/profile', (req, res) =>) {
    res.send("getting profile");    
});
    

app.post('/profile', (req, res))=> {
    const user = {

        name: 'sally',
        hobby: 'soccer',

    }
    
}   
server.listen(3000);