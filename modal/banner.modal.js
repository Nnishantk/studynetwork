const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    title:{
        type:String,
        default:null
    },
    file:{
        filename:{
            type: String,
            default: null
        },
        filetype:{
            type: String,
            default: null
        },
        filesize:{
            type: Number,
            default: 0
        },
        url:{
            type: String,
            default: null
        }
    },
    description:{
        type:String,
        default:null
    },
    isActive:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true
});


module.exports = mongoose.model('Banner', bannerSchema);
