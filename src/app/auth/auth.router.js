const authCtrl = require("./auth.controller")

const router=require("express").Router()
const uploader=require("../../middlewares/uploader.middleware")
const ValidateRequest = require("../../middlewares/validate-request.middleware")
const { registerSchmea } = require("./auth.validator")

const dirSetup=(req,res,next)=>{
    req.uploadDir ="./public/uploads/users"
    next()
}

router.post('/register',dirSetup,uploader.array('image'),ValidateRequest(registerSchmea),authCtrl.register)
router.get('/verifytoken',authCtrl.verifyToken)
router.post('/set-password/:token',authCtrl.setPassword)
router.post('/login',authCtrl.login)
router.post('/forget-password',authCtrl.forgetPassword)
router.get('/me',authCtrl.logMe)
router.post('logout',authCtrl.logout)

module.exports=router;