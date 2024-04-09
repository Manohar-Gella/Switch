// basics server of express
/** 
 *  first run this commads in terminal of an empty folder
 *      1. npm init -y
 *      2. npm install express
 * 
 */


const express = require('express');
const app = express();
const port = 9000;


app.get('/', (req, res) =>{
    res.send("Manohar Gella")
})

app.listen(port)