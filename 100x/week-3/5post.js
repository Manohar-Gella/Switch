const express = require('express');
const app = express();
const port = 8000;
app.use(express.json()) // for post requests


// post method
// user postman send body in json format
// {
//     "name": "manohar"
// }
app.post('/health', (req, res) => {
    const name = req.body.name;
    if(name == 'manohar'){
        res.send(`Hello ${name}`);
    }
    res.json({
        msg: "User not found"
    })
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})