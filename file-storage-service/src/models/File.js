const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const fileSchema=new Schema(
    {
        originalName:{
            type:String,
            required:true
        },
        filename:{
            type:String,
            required:true
        },
        mimeType:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            required:true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports=mongoose.model("File",fileSchema);