const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration


//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//Connect DB
mongoose.connect('mongodb+srv://dana:dana123@cluster0.yqxby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, },
    () => console.log('connected to DB!'));


//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

app.listen(3001, () => console.log('Server up and running'));