require("dotenv").config()
class AuthService{
    registerEmailMessage(name,token){
        return `
        <b>Dear ${name}</b></br>
        <p>Your account has been succesfully registerd.Please copy or click the link below to activate your account.</p>
        <a href="${process.env.FRONTEND_URL}/activate/${token}">
            ${process.env.FRONTEND_URL}/activate/${token}
            </a><br/>
            <p>
                <b>Regards</b>
            </p>
            <p>
                <b>System Admin</b>
             </p>
             <p>
                <em><small>Please donot reply to this email</small></em>
             </p>
        
        `
      
    }
}
const authSvc=new AuthService()
module.exports=authSvc;