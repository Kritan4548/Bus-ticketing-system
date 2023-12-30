
const express=require("express");
app=express();
const router = require("../../router/index");

app.use('/api/v1',router)
app.use((req,res,next)=>{
next({code:404,message:"Not found"})
})
app.use((error,req,res,next)=>{
    console.log("Garbage collector:",error)
    let code=error.code ?? 500;
    let message=error.message ?? "Internal server error ...";
    let result=error.result ?? null;
})
module.exports=app;