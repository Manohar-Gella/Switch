const express = require('express');
const app = express();
const port = 1200;

app.get('/', (req, res) => {
    const username = req.query.username;
    const pass = req.query.pass;

   if(username == "manohar"){
        res.json({
            msg: "welcome home"
        })
   }

    res.send("mental")
    
})


app.listen(port, () => {
    console.log(`Listining on port ${port}`)
})