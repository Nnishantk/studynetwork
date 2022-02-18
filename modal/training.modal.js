const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traingSchema = new Schema({
    course:{
        type:String,
        required:true
    },

    startDate:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    language:{
        type:String,
       required:true
    },

    price:{
        type:Number,
        required:true
    },
},{
    timestamps:true
});


module.exports = mongoose.model('Training', traingSchema);