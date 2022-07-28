const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const propertyModal = require('./modals/propertSchema')
const property=require("./routes/property")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config(); //for setting environment variables on server


app.listen(3001, (err) => {
    if (!err) {
        console.log("server started")
    } else {
        console.log(err)
    }
})

const mongoDB = process.env.ATLAS_URI;


mongoose.connect(mongoDB, {}).then((res) => {
    console.log("connected to db")
}).catch((err) => {
    console.log(err)
})


app.get('/',(req,res)=>{
  res.send("base route")
})
app.use("/getProperty",property)