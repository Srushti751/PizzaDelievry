const express = require('express')
const router = express.Router()
const pizzaModel = require('../models/pizzaModel.js')
const orderModel = require('../models/orderModel.js')
const jwt = require("jsonwebtoken")
const jwtSecret="asd889asdas5656asdas887";


function autenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    // const token=authHeader && authHeader.split(' ')[1];
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const token = user.token
    console.log(token)
    if(token==null){
        res.json({"err":1,"msg":"Token not match"})
    }
    else {
        jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if(err){
                res.json({"err":1,"msg":"Token incorrect"})
            }
            else {
                console.log("Match")
                next();
            }
        })
    }
}

router.get("/getPizzas",async(req,res)=>{
try {
    const pizzas = await pizzaModel.find({})
    
    res.send(pizzas)
} catch (error) {
    res.json({message:error})
}
})

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

module.exports = router