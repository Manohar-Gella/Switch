// express server
const express = require('express')
const app = express()
const port = 8000

app.get('/', function(req, res){
    res.send("Manohar Gella");
})

app.listen(port);
