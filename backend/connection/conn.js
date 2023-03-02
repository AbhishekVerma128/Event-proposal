const mongoose = require('mongoose');

function connection(){
    mongoose.connect('mongodb+srv://abhi123:abhi123@cluster0.h0caha6.mongodb.net/mainProject')
    .then(() => console.log('Connected!'));
}


  module.exports = connection;