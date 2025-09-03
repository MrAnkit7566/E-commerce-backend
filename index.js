// const express = require("express");
// const mongoose = require("mongoose");
// const userRoute = require("./src/routes/route")
// const cors = require('cors')

// let middleware1 = (req,res,next)=>{
//   console.log("middleware1");
//   // res.json({msg:"middleware1"})
//   next();
// }

// let middleware2 = (req,res,next)=>{
//   console.log("middleware2");
//   // res.json({msg:"middleware2"})
// }


// const app = express();
// app.use(cors({
//   origin: "*",   // Or your frontend domain only
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));

// app.use(express.json());//Middleware
// app.use("/", userRoute)//Middleware



// mongoose
//   .connect(
//     "mongodb+srv://ankitdeepu910:123Ankit%40%23@cluster0.gfyomjd.mongodb.net/E-Commerce"
//   )
//   .then(() => console.log("MongoDB Connected"))
//   .catch(() => console.log("DB Connection Failed"));

// app.listen(5000, (err) => {
//   err
//     ? console.log("Server Not Connected")
//     : console.log("Server is Running at port 5000");
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./src/routes/route"); // adjust path if needed

const app = express();

// Middleware
app.use(cors({
  origin: "*",   // You can restrict to your frontend domain instead of "*"
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// Routes
app.use("/", userRoute);

// MongoDB Connection (use env variable)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Connection Failed", err));

// Server Listen (Render requires process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is Running on port ${PORT}`);
});

