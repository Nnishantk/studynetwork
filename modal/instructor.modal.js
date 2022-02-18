const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const instructorSchema = new Schema({
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
    isActive:{
        type:Boolean,
        default:true
    },

},{
    timestamps:true
});

// instructorSchema.pre('save',async function(next){
//     try{
//    const password = await bcrypt.hash(this.password,10);
//    this.password = password;
//    next()
//     }catch(e){
//         next(e)
//     }
// });

// instructorSchema.methods.isValidPassword = async function (password) {
//     try {
//         return await bcrypt.compare(password, this.password)
//     } catch (error) { 
//         throw error
//     }
// };

module.exports = mongoose.model('Instructor', instructorSchema);
