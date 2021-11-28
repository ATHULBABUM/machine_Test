const express = require('express');
const app = express();
const cors = require("cors");;
const bodyParser = require('body-parser');
const chalk = require('chalk');
var indexRouter = require('./routes/index'); 
const mongoose = require('mongoose');

// .env file details in config file
const { parsed: config } = require('dotenv').config();
global.config = config;


app.use(cors({
    // origin: ['http://review.webc.in'],
    origin: ['http://localhost:4200'],
    "methods": "GET,PUT,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));
app.use(bodyParser.json())
app.use(indexRouter);


app.get('/',(req, res) => {
    res.send('Successfully hit 3000');
});


const mongoURI = config.MONGO_DB_URL
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
};

mongoose.connect( mongoURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, (err)=> {
        if(err) console.log("mongoose error: ", err)
        console.log(chalk.yellow("DB connected--"))
        app.listen({
            port: config.PORT,
            host: config.HOST
        }, (res)=> {
            console.log(chalk.yellow("Server started at: ", config.PORT));
    })
});
