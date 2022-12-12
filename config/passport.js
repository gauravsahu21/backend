const JWTStrategy=require("passport-jwt").Strategy;
const ExtractJWT=require("passport-jwt").ExtractJwt;
const passport=require('passport');
const authServices=require('../services/auth.services');
const AuthServiceInstance=new authServices();
const secret=process.env.secret_key;
const options={
  jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey:"secret",
}
const verify=async(payload,done)=>{

    try{   console.log("payload",payload);

        const user=await AuthServiceInstance.findById(payload.userid);
        console.log(user);
         if(!user)
         {
            return done(null,false);
         }
        return done(null,user);
    }catch(error)
    {
        return done(error,false);
    }
};


const strategy=new JWTStrategy(options,verify); 
module.exports=strategy;
 