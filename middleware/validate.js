const Joi=require('joi');
const Schema=Joi.object().keys({
    age:Joi.number().integer().min(0).max(100),
    gender:Joi.string().valid('male','female')
})
const validateSearchQuery=(req,res,next)=>{
    const data={gender:req.query.gender,age:req.query.age};
    const result=Schema.validate(data);
    if(result.error)
    {
        return res.status(422).json(result.error);
    }
    next();
}
module.exports={
    validateSearchQuery:validateSearchQuery,
}