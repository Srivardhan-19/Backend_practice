const File=require("../models/File");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

module.exports.uploadFile=async(req, res)=>{
    try{
        if(!req.file){
            return res.status(400).json({message:"No file uploaded"});
        }

        const file=new File({
            originalName:req.file.originalname,
            filename:req.file.filename,
            mimeType:req.file.mimetype,
            size:req.file.size
        });

        await file.save();
        return res.status(201).json({message: "File uploaded successfully",file: file});
    }catch(error){
        if (req.file && req.file.path) {
            try {
                await fs.promises.unlink(req.file.path);
            } catch (cleanupError) {
                console.error("File cleanup failed:", cleanupError.message);
            }
        }

        console.error("File upload failed:", error.message);

        return res.status(500).json({message:"File upload failed"});
    }
};

module.exports.getAllFiles= async(req,res)=>{
    try{
        const files=await File.find();
        return res.status(200).json({message:"Files retrived successfully",files:files});
    }catch(error){
        return res.status(500).json({message:"Failed to retrive files."});
    }
};

module.exports.getFileById= async(req,res)=>{
    try{
        let Id=req.params.id;
        if (!mongoose.Types.ObjectId.isValid(Id)) {
            return res.status(400).json({message: "Invalid file ID"});
        }

        const file=await File.findById(Id);
        if(!file){
            return res.status(404).json({message: "File not found"});
        }
        
        return res.status(200).json({message:"File retrived successfully",file:file});
    }catch(error){
        console.error("Error retrieving file:", error.message);

        return res.status(500).json({message:"Internal server error."});
    }
};

module.exports.downloadFile=async (req,res)=>{
    try{
        let Id =req.params.id;
        if (!mongoose.Types.ObjectId.isValid(Id)) {
            return res.status(400).json({message: "Invalid file ID"});
        }

        const file=await File.findById(Id);
        if(!file){
            return res.status(404).json({message: "File not found"});
        }

        const filePath = path.join(__dirname, "..", "uploads", file.filename);
        const isFileExists=fs.existsSync(filePath);

        if(!isFileExists){
            return res.status(404).json({message: "File not found"});  
        }

        res.download(filePath);
    }catch(error){
        console.error("Error retrieving file:", error.message);

        return res.status(500).json({message:"Internal server error."});
    }
}

module.exports.deleteFile=async (req,res)=>{
    try{
        let Id =req.params.id;
        if (!mongoose.Types.ObjectId.isValid(Id)) {
            return res.status(400).json({message: "Invalid file ID"});
        }

        const file=await File.findById(Id);
        if(!file){
            return res.status(404).json({message: "File not found"});
        }

        const filePath = path.join(__dirname, "..", "uploads", file.filename);
        const isFileExists=fs.existsSync(filePath);

        if(isFileExists){
            await fs.promises.unlink(filePath);
        }

        await File.findByIdAndDelete(Id);
        return res.status(200).json({message:"File deleted successfully"});
    }catch(error){
        console.error("File deletion failed:", error.message);

        return res.status(500).json({message:"Internal server error."});
    }
}