const mongoose= require('mongoose')
const Schema= mongoose.Schema
const itemSchema = require('./itemSchema')


const orderSchema= new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
})