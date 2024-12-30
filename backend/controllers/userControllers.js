import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import Generatetoken from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
       
        const{username, email, password, role} = req.body;
        const user=await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username alredy exits"})
        }
        const salt= await bcrypt.genSalt(10);
        const hashedpassword= await bcrypt.hash(password,salt)
        const newUser= new User({
            username,
            email,
            password:hashedpassword,
            role
        })
        if(newUser){
            Generatetoken(newUser._id,res);
           await newUser.save();

           res.status(201).json({
               _id:newUser._id,
                username:newUser.username,
                email:newUser.email,
                role:newUser.role,
                token:req.cookies.jwt
           })
   
       } else{
           return res.status(400).json({error:"Invalid user Data"})
       }

    } catch (error) {
        console.log("Error: ", error);
    }
}



export const login = async (req, res) => {
    const {username,password}=req.body;
       try {
        const user=await User.findOne({username});
        const ispasswordMatched= await bcrypt.compare(password,user?.password || ""); 
        if(!user || !ispasswordMatched){
            return res.status(400).json({error:"Invalid username or password"})
        }
        Generatetoken(user._id,res);
        res.status(200).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            token:req.cookies.jwt
        })
       } catch (error) {
         console.log(error)
       }
}

    
export const logout= (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logout successfully"})
    } catch (error) {
        console.log(error)
    }
}


export const getUsersForSideBar = async (req, res) =>{
    try {
       const loggedInUser = req.user._id;
       const allusers=await User.find({ _id: { $ne: loggedInUser } }).select("-password"); //find all the users expect that equal to the thaat user id which loggeid in user
       res.status(200).json(allusers);
    } catch (error) {
       console.log(error);
    }
}
export const getCurrentUser = async (req, res) =>{
    try {
       const loggedInUser = req.body.userId;

       const CurrUser=await User.findOne({ _id:  loggedInUser  }).select("-password"); //find all the users expect that equal to the thaat user id which loggeid in user
       
       res.status(200).json(CurrUser);
       
    } catch (error) {

       console.log(error);
    }
}