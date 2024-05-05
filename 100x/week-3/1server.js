// server building in express
// step 1 - npm init -y
// step 2 - npm install express

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})