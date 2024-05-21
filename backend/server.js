const express = require('express');
const cors = require('cors');
const mongoose = require('./mongo'); 
const User = require('./model/loginModel');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(400).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        res.status(500).json({ message: "Failed to login", error });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
