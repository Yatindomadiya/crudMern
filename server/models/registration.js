const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Reguser = new Schema({

    Username: {
        type: String,
        required: true,
        // unique: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type:String,
        required: true
    },
    confirmPass: {
        type:String,
        required: true 
    },
})

module.exports = mongoose.model("Reguser", Reguser)