const express = require('express');
const app = express();
const port = 300;

function calculate(n){
    let sum = 0;
    for(let i = 0; i<=n; i++){
        sum+=i;
    }
    return sum;
};

app.get('/', (req, res) => {
    const n = req.query.n;
    let ans = calculate(n)
    res.send(ans.toString());
})

app.listen(3000);