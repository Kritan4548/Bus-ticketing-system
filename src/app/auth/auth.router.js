const authCtrl = require("./auth.controller")

const router=require("express").Router()

const multer=require('multer')
const fs=require("fs")
const myStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        let path="./public/uploads/user"
         if(!fs.existsSync(path)){
            fs.mkdirSync(path,{recursive:true})
        }
        cb(null,path)
    },
    filename:(req,file,cb) =>{
        let random=Math.round(Math.random() * 9999)
        let ext=(file.originalname.split(".")).pop()
        let filename=Date.now()+"-"+random+"."+ext
        cb(null,filename)
    }
});
const uploader=multer({
    storage:myStorage
})

router.post('/register',uploader.array('image'),authCtrl.register)
router.get('/verifytoken',authCtrl.verifyToken)
router.post('/set-password/:token',authCtrl.setPassword)
router.post('/login',authCtrl.login)
router.post('/forget-password',authCtrl.forgetPassword)
router.get('/me',authCtrl.logMe)
router.post('logout',authCtrl.logout)

module.exports=router;