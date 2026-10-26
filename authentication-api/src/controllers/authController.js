const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required..."});
        }

        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(409).json({message:"Email already registered"});
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({name,email,password:hashedPassword});

        let saved= await newUser.save();

        return res.status(201).json({
            message:"User Added",
            user:{
                name:saved.name,
                email:saved.email,
                createdAt:saved.createdAt
            }
        });

    }catch(error){
        return res.status(500).json({message:error.message});
    }
};

module.exports.loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required..."});  
        }

        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid email or password"});
        }

        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid email or password"});
        }

        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );
        return res.status(200).json({
            message:"Login successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
