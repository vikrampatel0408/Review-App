const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type:String
    },
    password : {
        type:String,
        required: true
    },
})

const Userdb = mongoose.model('Userdb', schema);
module.exports = Userdb