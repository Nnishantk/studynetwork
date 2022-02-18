const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getInTouchSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    relatedProblum:{
        type:String,
        default:"a"
    },

    yourProblum:{
        type:String,
        required:true
    },
},{
    timestamps:true
});


module.exports = mongoose.model('GetInTouch', getInTouchSchema);