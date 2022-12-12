const Joi=require('joi');
const authValidattionSchema=Joi.object().keys({
    username:Joi.string().required().max(50),
    email:Joi.string().required().email({tlds:{allow:false}}),
    password:Joi.string().required().min(8)

})
const loginValidattionSchema=Joi.object().keys({
    username:Joi.string().required().max(50),

    password:Joi.string().required().min(8)

})
module.exports={
    authValidattionSchema,
    loginValidattionSchema}