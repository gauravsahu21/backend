const router=require("express").Router();
const {getUser,getUserById,getUserByAgeAndGender}=require('../controller/user.controller');

const {validateSearchQuery}=require('../middleware/validate');
router.get('/',getUser);
router.get('/search',validateSearchQuery,getUserByAgeAndGender);
router.get('/:uuid',getUserById);
module.exports=router;