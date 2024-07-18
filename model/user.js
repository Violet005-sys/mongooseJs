const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ 
    name: {
        type: String
    }, 
    age: {
        type: Number
    },
    email: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    }
});

module.exports = mongoose.model('User', UserSchema);