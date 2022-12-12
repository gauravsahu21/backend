const router=require('express').Router();
const {discussion}=require('../controller/auth.controller.js');
//const {authValidattionSchema,loginValidattionSchema}=require('../validate/auth.validate');
//const {validateSchema}=require('../middleware/validate.middleware.js')
// const validateUser=validateSchema(authValidattionSchema);
// const loginValidate=validateSchema(loginValidattionSchema);
const passport=require('passport');
const authenticate=passport.authenticate("jwt",{session: false});
console.log("routes reached");

router.post('/disc',authenticate,discussion);
module.exports=router;