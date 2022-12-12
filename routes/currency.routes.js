const router=require('express').Router();
const {getCurrencyList,getCurrencyById}=require('../controller/currency.controller');

router.get("/",getCurrencyList);
router.get("/:symbol",getCurrencyById);



module.exports=router;