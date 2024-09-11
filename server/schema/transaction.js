
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    t_id:{
        type:Number,
        required:true
    },

    _userid:{
        type:String,
        required:true
    },

    userName:{
        type:String,
        required:true
    },
    book_name:{
        type:String,
        required:true
    },
    time_issued:{
        type:Date,
        required:true
    },
    time_returned:{
        type:Date,
        required:true
    }

})

module.exports=mongoose.model('transaction',transactionSchema);