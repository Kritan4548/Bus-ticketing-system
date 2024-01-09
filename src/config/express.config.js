
const express=require("express");
const app=express();
const router = require("../../router/index");


//body parser
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use('/api/v1',router)
app.use((req,res,next)=>{
next({code:404,message:"Not found"})
})
app.use((error,req,res,next)=>{
    console.log("Garbage collector:",error)
    let code=error.code ?? 500;
    let message=error.message ?? "Internal server error ...";
    
    res.status(code).json({
        result:null,
        message:message,
        meta:null
    })
})
module.exports=app;