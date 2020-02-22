const mongoose = require('mongoose');

mongoose.connect('url',(error)=>{
    if(!error) console.log('Sucessful Conncetion');
    else console.log('Server Error: ' + JSON.stringify(error, undefined, 2));
});

module.exports= mongoose;