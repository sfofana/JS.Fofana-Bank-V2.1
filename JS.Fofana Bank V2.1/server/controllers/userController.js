const express = require('express');
let router = express.Router();
let objectId = require('mongoose').Types.ObjectId;

const { User } = require('../models/user.js'); 

//'/client'
router.get('/', (request, response)=> {
    User.find((error, data) => {
        if(!error) {
            response.send(data);
        } 
        else {
            console.log('Internal Error: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

router.get('/:id', (request, response)=> {
    if (!objectId.isValid(request.params.id)){
        return response.status(400).send('User not found');
    }
    User.findById(request.params.id, (error, data) => {
        if(!error) {
            response.send(data);
        } 
        else {
            console.log('Internal Error: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

router.put('/:id', (request, response)=> {
    if (!objectId.isValid(request.params.id)){
        return response.status(400).send('User not found');
    }

    let user = {
        email: request.body.email,
        password: request.body.password,
        checking: request.body.checking
    };

    User.findByIdAndUpdate(request.params.id, { $set: user }, { new: true }, (error, data) => {
        if(!error) {
            response.send(data);
        } 
        else {
            console.log('Internal Error with Transaction: ' + JSON.stringify(error, undefined, 2));
        }
    });
});


module.exports = router;