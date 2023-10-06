const express = require("express");
const http = require("http");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
var mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();

const teamRoute = require("./api/routes/team");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);



mongoose.connect(
    "mongodb+srv://worksigai2023:"+process.env.MONGO_PASS+"@cluster0.imdw77r.mongodb.net/CLOCKOUT?retryWrites=true&w=majority&appName=AtlasApp",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/team", teamRoute);

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Listening on port " + port);
});