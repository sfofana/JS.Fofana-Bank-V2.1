const express = require('express');
const bodyParser= require('body-parser');

const { mongoose } = require('./driver.js');
let userController = require('./controllers/userController.js');

let app = express();
app.use(bodyParser.json());

app.listen(3000, ()=> console.log('Server started on port 3000'));

app.use('/client', userController);