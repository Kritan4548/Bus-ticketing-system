
const express=require("express");
const app=express();
const router = require("../router/index");
const { MulterError } = require("multer");
const { ZodError } = require("zod");



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
    let result=error.result ??  null;

    if(error instanceof MulterError){
        if(error.code === "LIMIT_FILE_SIZE"){
            code=400,
            message=error.message
        }
    }

    //TODO :FORM VALIDATION
    if(error instanceof ZodError){
        code=400;
        let zodErrors=error.errors;
        let msg ={}
        zodErrors.map((err) =>{
            msg[err.path[0]]=err.message
        })
        message="Validation Failure";
        result=msg;
    }
    res.status(code).json({
        result:result,
        message:message,
        meta:null
    })
})
module.exports=app;