const express=require("express");
const app=express();
const mongoose=require("mongoose");
const noteRouter=require("../routes/noteRoutes.js");

require("dotenv").config();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Notes API is running");
});

app.use("/api/notes",noteRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB Connected");
})
.catch((error)=>{
    console.error("DB Connection failed",error.message);
});

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});