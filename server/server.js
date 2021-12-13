const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/config.js')
const dotenv = require("dotenv");

// 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
//config dotenv
dotenv.config();

//connect database
connectDB();

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))


//route
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/api/pizzas",require('./routes/pizzaRoutes'))
app.use("/api",require('./routes/orderRoutes'))
app.use("/checkout",require('./routes/placeOrderRoutes'))
app.use("/api/users",require('./routes/userRoutes'))


app.listen(8089,()=>{
    console.log("Working on http://localhost:8089")
})