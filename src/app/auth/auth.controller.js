const dotenv=require('dotenv')
dotenv.config()
const {z}=require("zod");
const { generateRandomString } = require("../../config/helpers");
const mailSvc = require('../../services/mail.service');
const authSvc = require('./auth.service');

class AuthController{
register=async(req,res,next)=>{
  
    try{
       let payload=req.body;

      
       //file
    
       if(req.file){
       payload.image=req.file.filename;
       }else if(req.files){
        payload.image=req.files.map((item)=>item.filename)
       }
       payload.status="inactive";
       payload.token=generateRandomString();

       //Mail,Otp
      let mailMsg=authSvc.registerEmailMessage(payload.name,payload.token)
     const mailAck= await mailSvc.emailSend(
        payload.email,
        "Please activate your account!",
        mailMsg
      )
      console.log(mailAck)
        res.json({
            result:payload
            // messagge:"You are registered",
            // meta:null
        })
    }catch(except){
        next(except)
    }
   // res.json("You are registered succesfully");
}
verifyToken=(req,res,next)=>{
  
    try{
      let token=req.params.token;
      if(token){
        res.json({
            result:{},
            msg:"Valid token",
            meta:null
        })
      }else{
        next({code:400,message:"Invalid or expired token"})
      }
    }catch(except){
        next(except)
    }
   
}
 setPassword=async (req,res,next)=>{
  
    try{
        let data=req.body
       res.json({
        result:data
       })
    }catch(except){
        next(except)
    }
   
}
login=(req,res,next)=>{
  
    try{
     
    }catch(except){
        next(except)
    }
   
}
forgetPassword=(req,res,next)=>{
  
    try{
       
    }catch(except){
        next(except)
    }
   
}
logMe=(req,res,next)=>{
  
    try{
       
    }catch(except){
        next(except)
    }
   
}
logout=(req,res,next)=>{
  
    try{
       
    }catch(except){
        next(except)
    }
   
}
}
const authCtrl=new AuthController();
module.exports=authCtrl;
