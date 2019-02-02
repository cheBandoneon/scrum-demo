const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/scrum');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api/v1', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({ error: err.message });
});

//Listen for requests
app.listen(process.env.port || 3000 , function(){
    console.log('I am listening');
});