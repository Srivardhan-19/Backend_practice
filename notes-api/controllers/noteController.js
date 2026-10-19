const Note=require("../src/models/Note.js");

module.exports.createNote=async(req,res)=>{
    try{
        const {title,content}=req.body;
        const note=new Note({title,content});
        let saved=await note.save();
        console.log(saved);

        res.status(201).json(saved);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports.getNotes=async(req,res)=>{
    try{
        const notes=await Note.find({});
        res.status(200).json(notes);

    }catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports.getNoteByID=async(req,res)=>{
    try{
        let {id}=req.params;
        const note=await Note.findById(id);
        res.status(200).json(note);

    }catch(error){
        res.status(404).json({ message:"Note not found"});
    }
};

module.exports.updateNote=async(req,res)=>{
    try{
        let {id}=req.params;
        let {title,content}=req.body;
        const note=await Note.findByIdAndUpdate(id,{title,content},{returnDocument:"after",runValidators:true});
        if(!note){
            return res.status(404).json({message:"Note not found"});
        }

        res.status(200).json(note);

    }catch(error){
        if(error.name==="CastError"){
        res.status(400).json({ message:"Invalid note ID"});
        }

        res.status(500).json({message: error.message});
    }
};

module.exports.deleteNote=async(req,res)=>{
    try{
        let {id}=req.params;
        const note=await Note.findByIdAndDelete(id);
        if(!note){
            return res.status(404).json({message:"Note not found"});
        }

        res.status(200).json(note);

    }catch(error){
        if(error.name==="CastError"){
        res.status(400).json({ message:"Invalid note ID"});
        }

        res.status(500).json({message: error.message});
    }
};