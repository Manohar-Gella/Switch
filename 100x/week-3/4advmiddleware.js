// advanced middleware wher we use a function to do the check

const express = require('express');
const app = express();
const port = 1100;
const username = "manohar";

function authcheck(req, res, next){
    const username = req.query.username;
    if(username!="manohar"){
        res.json({
            msg: "User not found"
        });
    }
    else{
        next();
    }
};

app.get("/", authcheck, (req, res) => {
    
    res.send("All good");
})

app.listen(port, () => {
    console.log(`Listining on port ${port}`)
})