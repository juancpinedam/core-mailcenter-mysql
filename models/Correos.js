const mongoose = require("mongoose")

var schema = mongoose.Schema

var CorreosSchema = new mongoose.Schema(
    {
        guia:{type:String,required:true,unique:true},
        fecha:{type:String,required:true,unique:false},
        telefono:{type:Number,required:true,unique:false},
        info:{type:String,required:true,unique:false},
        username:{type:String,required:true,unique:false},
        password:{type:String,required:false,unique:false},
        estado:{type:Number,required:true,unique:false}
    },
    {
        timestamps:true,
        versionKey:false
    }
)



module.exports = mongoose.model('empresas',EmpresasSchema,'empresas');