const express = require('express')
const router = express.Router()
const orderModel = require('../models/orderModel.js')



router.post("/save",(req,res)=>{
    console.log("Body:",req.body)
    const data = req.body;

    const newblog = new orderModel(data);
    newblog.save((error)=>{
        if(error){
            return((500),res.send("Something went wrong"))
        }
        res.send("Your data is saved in database!!!")
})
})

router.get("/order",(req,res)=>{

    orderModel.find({})
    .then((data)=>{
        console.log(data)
        res.json(data)

    })
    .catch((error)=>{
        console.log(error)
    })
})

router.delete("/delete/:id",(req,res)=>{
    let id = req.params.id;
    orderModel.deleteOne({_id:id},(err)=>{
        if(err) throw err
        res.send("Category deleted")
    })
})


module.exports = router