const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    //name,
    name:{
        type:"string",
        required : true,
    },
    age:{
        type: Number,
        required:true
    },
    mobile:{
        type:Number,
        default:false
    },
    city:{
        type:"string",
        required : true
    },
    section:{
        type:"string"
    }
});
module.exports = mongoose.model('User',userSchema)