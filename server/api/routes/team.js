const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const path = require('path');
const fs = require('fs');

const Submission = mongoose.model('Submission', {
    teamId: Number,
    questionId: String,
    timestamp: String,
});


router.get('/login', async (req, res) => {
    res.send({
        message: "Please login"
    });
});

router.post('/login', async (req, res) => {
    try {
        const collection = mongoose.connection.collection('TEAMS'); // Access 'TEAMS' collection using mongoose
        const my_id = parseInt(req.body.id)
        const user = await collection.findOne({ Id: my_id });

        if (!user) {
            return res.send({
                message: "Team Not found",
            });
        }
        if (req.body.pass === user.Password) {
            req.session.team_id = my_id;
            console.log(req.session.team_id)
            const token = jwt.sign({
                id: user.Id
            }, process.env.JWT_KEY, {});

            req.session.jwttoken = token;
            console.log("logged in")
            return res.send({
                message: "Login Successful!",
            });
        } else {
            return res.send({
                message: "Wrong Password",
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "An error occurred during login",
        });
    }
});

router.post('/submit-answer', async (req, res) => {
    try {
        // Extract the data from the request body
        const { questionId } = req.body;
        const currentTime = new Date().toLocaleTimeString('en-US', {
            hour12: false, // Use 24-hour time format
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        // Create a new Submission document
        console.log(req.session.team_id)
        const submission = new Submission({
            teamId: req.session.team_id,
            questionId: questionId,
            timestamp: currentTime,
        });

        // Save the submission to MongoDB
        await submission.save();

        res.status(201).json({ message: 'successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error submitting answer' });
    }
})


router.get('/logout', async (req, res, next) => {
    await Team.findOneAndUpdate(
        { team_id: req.session.team_id },
        { $set: { logged_status: false } }
    );
    req.session.destroy();
    res.send({
        message: "Logout successful",
    });
})
module.exports = router