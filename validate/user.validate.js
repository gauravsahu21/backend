const Joi=require('joi');
const Schema=Joi.object().keys({
    age:Joi.number().integer().min(0).max(100),
    gender:Joi.string().valid('male','female')
})
const getQueryError=(data)=>{
    const result=Schema.validate(data);
    console.log(result);
    return result.error;
}
const verifyAuth=(req,res)=>{
    const {authorization}=req.headers;
    console.log(authorization);
    console.log(process.env.route_password);
    if(!authorization)
    {
        return false;
    }
    if(authorization!==process.env.route_password)
    {
        return false;
    }
    return true;
}
module.exports={
    getQueryError:getQueryError,
    verifyAuth:verifyAuth
}