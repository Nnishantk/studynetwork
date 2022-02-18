const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    },
    avtar: {
        filename: {
            type: String,
            default: null
        },
        filetype: {
            type: String,
            default: null
        },
        filesize: {
            type: Number,
            default: 0
        },
        url: {
            type: String,
            default: null
        }
    },
    isDeleted:{
        type:Boolean,
        default:false
    },

},{
    timestamps:true
});

userSchema.pre('save',async function(next){
    try{
   const password = await bcrypt.hash(this.password,10);
   this.password = password;
   next()
    }catch(e){
        next(e)
    }
});

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) { 
        throw error
    }
};

module.exports = mongoose.model('User', userSchema);
