const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
    // contactno: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // passkey: {
    //     type: String,
    //     required: true
    // },
    // med: {
    //     type: String,
    //     required: true
    // }
})

const Userdb = mongoose.model('s',schema);
module.exports = Userdb;
// var mongoose=require('mongoose');
// var schema=mongoose.schema;
// userSchema=new schema({
//     name:String,
//     email:String,
//     username:String,
//     contactno:Number,
//     passkey:String
// }),
// mongoose.models={}
// User =mongoose.model('USer',userSchema);
// module.exports=User;