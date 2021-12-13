const express = require('express')
const router = express.Router()
const placeorderModel = require('../models/placeOrder.js')

const nodemailer = require('nodemailer')

const transporter =nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth:{
        user:'shettysrushti55555@gmail.com',
        // user:'florence.barrows41@ethereal.email',
        // pass:'1thavadxqeKdcmJbY6'
        pass:'Simple5#'
    }
})

// let maildetails = {
//     to:"shettysrushti55555@gmail.com",
//     from:"shettysrushti55555@gmail.com",
//     subject:"Ordered successfully",
//     html:"<h1>Wlcome to PizzaD, shop pizzas here</h1>"
// }

// router.post("/orderplace",(req,res)=>{
//     console.log("Body:",req.body)
//     const data = req.body;

//     const newblog = new placeorderModel(data);
//     newblog.save((error)=>{
//         if(error){
//             return((500),res.send("Something went wrong"))
//         }
//         res.send("Your data is saved in database!!!")
// }).then(newblog=>{
//     transporter.sendMail()

// })
// })

const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey('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')

router.post("/orderplace",(req,res)=>{
    console.log("Body:",req.body)
    const data = req.body;
    let maildetails = {
        to:"shettysrushti55555@gmail.com",
        from:"florence.barrows41@ethereal.email",
        subject:"Ordered successfully",
        text:  `Hi, ${data.user} Your following Order has been placed successfully 
                Types of Pizzas: ${data.quantity}
                Card Details:${data.card}
                Total Amount: Rs.${data.total}
                Status: Ordered`,
        html:`       <table style="border:2px solid black">
        <tr>
            <th>Types of Pizzas </th>
            <th> Card Details </th>
            <th>Total Amount </th>
            <th>Status </th>
        </tr>
        <tr>
            <td>${data.quantity}</td>
            <td>${data.card}</td>
            <td>${data.total}</td>
            <td>Ordered</td> 
            
        </tr>
    </table>`
    }
    const newblog = new placeorderModel(data);
    newblog.save()
    res.send("placed")
    transporter.sendMail(maildetails,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Email sent")
            }
        })
 
 
})

router.get("/orderdetails",(req,res)=>{

    placeorderModel.find({})
    .then((data)=>{
        console.log(data)
        res.json(data)

    })
    .catch((error)=>{
        console.log(error)
    })
})


module.exports = router