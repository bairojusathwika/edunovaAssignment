const mongoose = require('mongoose');

const userSchema= new mongoose.Schema(
    {
        _userid:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('User',userSchema);