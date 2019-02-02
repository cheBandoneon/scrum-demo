const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//Set up express app
const app = express();
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb://localhost/scrum', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api/v1', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({ error: err.message });
});

//Listen for requests
app.listen( 8080 , function(){
    console.log('I am listening');
});