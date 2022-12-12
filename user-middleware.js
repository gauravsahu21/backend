const verifyAuth=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization)
    {
        return res.status(403).json({message:"unauthorized"})
    }
    if(authorization!==process.env.route_password)
    {
        return res.status(403).json({message:"unauthorized"})
    }
    next();
}
module.exports={
    verifyAuth:verifyAuth,
}