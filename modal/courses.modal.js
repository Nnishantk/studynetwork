const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs =require('fs')

const courseSchema = new Schema({
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teachers'
    },
    title: {
        type: String,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    rating: {
        type: Number,
        default: 0
    },
    years: {
        type: String,
        default: null
    },
    video: {
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
    lectures:{
        type:Number,
        default:null
    },
    categories:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    verifyStatus: {
        type: Number,
        default: 0
    },
    isDeleted: {
        type: Date,
        default: null
    },
    status: {
        type: Number,
        default: 1
    },
    link:{
        type:String,
        required:true,
        
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', courseSchema)
