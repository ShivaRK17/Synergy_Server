const mongoose = require('mongoose')

const farmerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
        min:1000000000,
        max:9999999999
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    landSize:{
        type:Number,
        required:true,
        min:0
    },
    location:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    crops:{
        type:[String]
    }
    ,
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
})

const Farmer = new mongoose.model('Farmer',farmerSchema)
module.exports = Farmer