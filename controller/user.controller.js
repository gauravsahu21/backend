const {data}=require('../users.json');
const {getQueryError}=require('../validate/user.validate.js');
const getUser=(req,res)=>{

    res.status(200).json(data);
}
const getUserById=(req,res)=>{
    const k=req.params.uuid;
    const user=data.find((x)=>x.login.uuid===k);
    if(user)
    {
    res.status(200).json(user);}
    else
    {
        res.status(404).json({message:"Not Found"});
    }
}
const getUserByAgeAndGender=(req,res)=>{
    const age=req.query.age;
    const gender=req.query.gender;
    console.log(age,gender);
    //  const error=getQueryError({age,gender});
    //  if(error)
    //  { res.status(422).json(error);}
     
   
    
     const users=data.filter(d=>{
        if(gender && age)
        {
         d.gender===gender && Number(d.dob.age)===Number(age);
         }
         return  d.gender===gender || Number(d.dob.age)===Number(age);
        })
       
    if(users)
    { console.log("aaa");
     console.log(users);
        res.status(200).json(users);
    }
    else
    {
      res.status(404).json({message:"not found"});

    }
 

}
module.exports={
    getUser:getUser,
    getUserById:getUserById,
    getUserByAgeAndGender:getUserByAgeAndGender
}