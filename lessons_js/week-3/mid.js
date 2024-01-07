const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let counter = 0;
function addup(req, res, next){
    counter ++;
    res.send({
        counter
    })
};

app.use(addup());

app.get('/check', addup, function(req, res) {
    res.send("No of reqeusts: " + addup);
    
})

