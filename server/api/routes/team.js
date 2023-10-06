const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const path = require('path');
const fs = require('fs');
const checkAuth = require("../middleware/teamauth");
const Submission = mongoose.model('Submission', {
    teamId: String,
    questionId: String,
    timestamp: String,
  });


router.get('/login', async (req, res) => {
    res.send({
        message: "pls login"
    })
})

router.post('/login', async (req, res) => {
    try {
        var user = await Team.find({ team_id: req.body.team_id })
        if (user.length < 1) {
            res.send({
                message: "Team Not found",
            });
        } else if (user[0].logged_status) {
            res.send({
                message: "Already logged In!"
            })

        }
        else {
            if (req.body.pass === user[0].pass) {
                // await Team.findOneAndUpdate(
                //     { team_id: req.body.team_id },
                //     { $set: { logged_status: true } }
                // );
                req.session.team_id = user[0].team_id;
                const token = jwt.sign({
                    "id": user[0].team_id
                }, process.env.JWT_KEY, {},
                );
                req.session.jwttoken = token;
                res.send({
                    message: "login Successful!",
                });
            }
            else {
                res.send({
                    message: "Worng Password",
                });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "An error occurred during login",
        });
    }
})

router.post('/submit-answer', async (req, res) => {
    try {
        // Extract the data from the request body
        const { teamId, questionId, answer } = req.body;
        const currentTime = new Date().toLocaleTimeString('en-US', {
            hour12: false, // Use 24-hour time format
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });
        // Create a new Submission document
        const submission = new Submission({
          teamId: teamId,
          questionId: questionId,
          timestamp: currentTime,
        });
    
        // Save the submission to MongoDB
        await submission.save();
    
        res.status(201).json({ message: 'Answer submitted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error submitting answer' });
      }
})


router.get('/logout', checkAuth, async (req, res, next) => {
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