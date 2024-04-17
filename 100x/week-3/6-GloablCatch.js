// if ther was any wrong user input the server shows up the code and make it expose
// to avid that we use global catches
// its kind of a middleware
// where you define a function to use so that whenever there is error in the code it catches and actes as a error message sender
// here is the code

const express = require('express');
const app = express();
const port = 1300;

app.use(express.json());

// this thing catches the error and passes a vlid output
app.use(function(error, req, res, next){
    // error counter for traking the no of errors
    res.json({
        msg: "something went wrong"
    })
});

app.post('/health', (req, res) =>{
    const user = req.body.user;
    res.send(`Hello ${user}`)
})



app.listen(port)