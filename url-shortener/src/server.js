const express=require("express");
const app=express();
const urlRouter=require("./routes/urlRoutes");
const mongoose=require("mongoose");
const urlController=require("./controllers/urlController");
require('dotenv').config();

app.use(express.json());

app.use("/api/urls",urlRouter);
app.get("/:code", urlController.redirectUrl);

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