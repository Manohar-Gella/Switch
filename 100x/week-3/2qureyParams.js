// questy params in express js
// url param input -> https://localhost:8000/?pass=0055

const epxress = require('express');
const app = epxress();
const port = 700;

app.get('/', (req, res) => {
    const pass = req.query.pass;
    if(pass != '0055'){
        res.send("Wrong pass")
    }
    res.send("welcome to pornhub");
})

app.listen(port, () =>{
    console.log(`Runnning on port ${port}`)
});