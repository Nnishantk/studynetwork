const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image: {
        filename: {
            type: String,
            default: null
        },
        filetype: {
            type: String,
            default: null
        },
        filesize: {
            type: String,
            default: null
        },
        url: {
            type: String,
            default: null
        }
    },
    tags:[String],
    isActive:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true
});


module.exports = mongoose.model('Category', categorySchema);
