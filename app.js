const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")




const axios = require("axios")


let app =express()

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({
    extended:true,
    
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cors())

app.use(morgan("dev"))

let port =process.env.PORT || 5000
let apikey =process.env.API_KEY 

app.get("/:email",(req,res)=>{
   let {email}= req.params;
   axios.get(`https://api.kickbox.com/v2/verify?email=${email}&apikey=${apikey}`)
   .then(result=>res.send({
    "status":"successfully",
    
    }))
   .catch(err=>res.json({
   "status":"error",
   "massage":err
   }))

})




app.listen(port,(req,res)=>console.log("server is working at",port))