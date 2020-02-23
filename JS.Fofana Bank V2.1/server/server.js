const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');

const { mongoose } = require('./driver.js');
let userController = require('./controllers/userController.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', userController);

app.listen(3000, ()=> console.log('Server started on port 3000'));

