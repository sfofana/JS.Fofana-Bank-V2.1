const express = require('express');
let router = express.Router();
let objectId = require('mongoose').Types.ObjectId;

const { User } = require('../models/user.js'); 

//'/client'
router.get('/client', (request, response)=> {
    User.find((error, data) => {
        if(!error) {
            response.send(data);
        } 
        else {
            console.log('Internal Error: ' + JSON.stringify(error, undefined, 2));
        }
    });
});

router.get('/client/:id', (request, response)=> {
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

router.put('/client/:id', (request, response)=> {
    if (!objectId.isValid(request.params.id)){
        return response.status(400).send('User not found');
    }

    let user = {
        email: request.body.email,
        password: request.body.password,
        accounts: request.body.accounts
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

router.post('/client', (request, response)=> {
    let user = new User({
        email: request.body.email,
        password: request.body.password,
        accounts: request.body.accounts
    });
    user.save((error, data) => {
        if(!error) {
            response.send(data);
        } 
        else {
            console.log('Internal Error with Transaction: ' + JSON.stringify(error, undefined, 2));
        }
    });
});


module.exports = router;