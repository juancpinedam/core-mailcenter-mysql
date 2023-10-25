const mongoose = require("mongoose")

var schema = mongoose.Schema

var UsersSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:false
        },
        role:{
            type:String,
            default: "user",
          },
        estado:{
            type:Number,
            default: 1
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)



module.exports = mongoose.model('users',UsersSchema,'users');