const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:String,
    price:Number,
    quantity:Number

},{timestamps:true})

const orderModel = mongoose.model('order',orderSchema)

module.exports = orderModel;