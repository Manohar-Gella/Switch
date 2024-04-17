// a framework are helping tool for middlware wher we can cutomize or structure the middleware
// npm install zod to install the zod


const express = require("express");
const zod = require('zod');
const app = express();
const port = 1400;
const schema = zod.array(zod.number());
app.use(express.json());


app.post('/', (req, res) => {
    const name = req.body.name;
    const response = schema.safeParse(name);
    res.send({
        response
    })
})

app.use(function(error, req, res, next){
    res.json({
        msg: "Something went wrong"
    })
})

app.listen(port)
