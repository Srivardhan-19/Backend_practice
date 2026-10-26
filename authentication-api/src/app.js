const express=require("express");
const app=express();
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter=require("./routes/authRoutes");

app.use(express.json());

app.use("/api/auth",authRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
    });
    
app.get("/",(req,res)=>{
    res.send("Authenticatoin API is running...");
});

