const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./src/routes/route")
const cors = require('cors')

// let middleware1 = (req,res,next)=>{
//   console.log("middleware1");
//   // res.json({msg:"middleware1"})
//   next();
// }

// let middleware2 = (req,res,next)=>{
//   console.log("middleware2");
//   // res.json({msg:"middleware2"})
// }


const app = express();
app.use(cors());
app.use(express.json());//Middleware
app.use("/", userRoute)//Middleware



mongoose
  .connect(
    "mongodb+srv://ankitdeepu910:123Ankit%40%23@cluster0.gfyomjd.mongodb.net/E-Commerce"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("DB Connection Failed"));

app.listen(5000, (err) => {
  err
    ? console.log("Server Not Connected")
    : console.log("Server is Running at port 5000");
});


