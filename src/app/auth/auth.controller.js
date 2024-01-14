const {z}=require("zod");
const { generateRandomString } = require("../../config/helpers");
class AuthController{
register=(req,res,next)=>{
  
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
      
    }catch(except){
        next(except)
    }
   
}
setPassword=(req,res,next)=>{
  
    try{
    
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
