const {Schema, model} = require('mongoose');
const mongoose = require('mongoose'); 
mongoose.set('useCreateIndex', true);

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    
},{timestamps:true});

module.exports = model('User', UserSchema);