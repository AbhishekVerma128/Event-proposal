const mongoose = require('mongoose');

function connection(){
    mongoose.connect('mongodb+srv://parthThacker:parth1213@cluster0.twdoy22.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));
}


  module.exports = connection;