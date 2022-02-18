const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrerTrackSchema = new Schema({
    title:{
        type:String,
        required:true
    },

    blog:{
        type:String,
        required:true
    },
    date:{
        type:Date,
       default:Date
    },
  
},{
    timestamps:true
});


module.exports = mongoose.model('CareerTrack', carrerTrackSchema);