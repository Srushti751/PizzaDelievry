const mongoose = require('mongoose')

const placeOrderSchema = mongoose.Schema({
    card:{
        type:String,
        require:true
    },
    
    quantity:Number,
    total:Number,
    user:String

},{timestamps:true})

const placeorderModel = mongoose.model('placeorder',placeOrderSchema)

module.exports = placeorderModel;