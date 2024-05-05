const express = require('express');
const app = express();
const port = 5050;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


app.use(express.json());

mongoose.connect("mongodb+srv://tester:Manohargella77@cluster0.q4fqx9w.mongodb.net/moonlight",);

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String
});

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpass = req.body.userpass;

    const existingUser = await User.findOne({email: useremail});
    if(existingUser){
        res.send({"msg:": "user already exist"});
    }


    const user = new User({
        name: username,
        email: useremail,
        password: userpass // Save the hashed password
    });

    await user.save();
    res.json({ msg: "User successfully saved" });

});

app.listen(port, () => {
    console.log("Server deployed");
});
