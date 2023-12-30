const authCtrl = require("./auth.controller")

const router=require("express").Router()
router.get('/register',authCtrl.register)
module.exports=router;