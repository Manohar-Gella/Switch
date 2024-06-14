// better way to write the server version 2.0

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4040;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://tester:Manohargella77@cluster0.q4fqx9w.mongodb.net/revision")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define User model
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Routes
app.get('/', (req, res) => {
    res.send("<h1><b><i>Manohar Gella, go to /signin</i></b></h1>");
});

app.post('/signin', async (req, res) => {
    const { username, useremail, userpass } = req.body;

    try {
        const existingUser = await User.findOne({ email: useremail });
        if (existingUser) {
            return res.status(400).send({ "msg": "User already exists" });
        }

        const user = new User({
            name: username,
            email: useremail,
            password: userpass
        });

        await user.save();
        res.status(201).send({ "msg": "User data successfully saved" });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send({ "msg": "Internal server error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
