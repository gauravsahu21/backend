const authServices=require('../services/auth.services.js');
const AuthServiceInstance=new authServices();
const postSignup=async(req,res)=>{
    try{   console.log(req.body);
       const result=await AuthServiceInstance.signup(req.body);
       res.status(200).json(result);
    }
    catch(err){
        res.json(err);
    }

}
const postLogin=async(req,res)=>{
    try{
        // console.log("controller reached");
        // console.log(req.body);
        const {username,password}=req.body;
       // console.log(username,password);
     const result=await AuthServiceInstance.login(username,password);
     console.log("controller",result);
     if(result)
     {  console.log("result",result);
        const token=await AuthServiceInstance.generateToken(result[0]._id);
        console.log("token controller",token);
        // res.cookie("token",token.jwt,{
        //     maxAge:60*60*1000,
        //     httpOnly:true
        // })
     res.status(200).json({...result,isLogged:true,token});}
     else
     {
        res.json({message:"not found"});
     }
    }catch(err)
    {
        res.json(err);
    }
}
const discussion=(req,res)=>{
    res.status(200).json({message:"now i get it"});

}
module.exports={
    postSignup:postSignup,
    postLogin:postLogin,
    discussion:discussion
}