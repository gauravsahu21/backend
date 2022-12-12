
const authModel=require('../model/auth.model.js');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
class authServices{
signup=async(body)=>{
    const {password}=body;
    const hashedPassword=await this.encryptPassword(password);
    const newUser=new authModel({...body,password:hashedPassword});
    const result=await newUser.save();
    return result;
}
encryptPassword=async(password)=>{
    const salt=await bcrypt.genSalt();
   const hashedPassword=await bcrypt.hash(password,salt);
   return hashedPassword;
}

login=async(username,password)=>{
  
   try{
    const user=await authModel.find({username});
    console.log("user",user);
    // if(!user)
    // {    
    //     return null;
    // }
    

    console.log("twoargumensts",password,user[0].password);
  
    const result=await bcrypt.compareSync(password,user[0].password)
    console.log("Resut",result);

    if(result)
    {
        return {
            isLogged:true,
            ...user,
        }
    }
    else
    {
        return null;
    }
   }
   catch(error)
   {
      throw error;
   }


}
generateToken=async(userid)=>{
    try{
         console.log("userid",userid);
    const token=jwt.sign({userid},"secret",{expiresIn:"1hr"})
    console.log("token",token);
    return token;


    }catch(err)
    {
        throw err;
    }
 
}
findById=async(id)=>{
    try{
        const user=await authModel.findById(id);
        return user;

    }catch(error)
    {
       throw error;
    }
}

}
module.exports=authServices;