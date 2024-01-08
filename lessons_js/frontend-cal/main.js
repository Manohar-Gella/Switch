const express = require('express')
const app = express()
const port = 3000

app.get('/cal', function(req, res) {
    
    res.send("Hello world");
})

app.listen(port)

function populateDiv() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let ans = parseInt(x)+ parseInt(y);
    const final = document.getElementById("finalSum");
    
    final.innerHTML = `${x} + ${y} = ${ans}`;
}