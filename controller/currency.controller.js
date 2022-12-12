const {data}=require('../currencies.json');
const {verifyAuth}=require('../validate/user.validate.js')
const getCurrencyList=(req,res)=>{
    // if(!verifyAuth(req,res))
    // {
    //     return res.status(403).json({message:"unauthorized"});
    // }
    const num=req.query.min_value;

    console.log(num);
    if(num)
    {
    const k=data.filter(d=>Number(d.min_size)===Number(num));
    console.log(k);
    res.status(200).json(k);}
    else
    {
    res.status(200).json(data);
    }
};
const getCurrencyById=(req,res)=>{
    // if(!verifyAuth(req,res))
    // {
    //     return res.status(403).json({message:"unauthorized"});
    // }
    const cur=req.params.symbol;
    const k=data.find(x=>x.id===cur.toUpperCase());
    if(k)
    {
    res.status(200).json(k);}
    else{
     console.log("yes");
      res.status(404).json({message:"invalidSymbol"});
    }
 }
module.exports={
getCurrencyList:getCurrencyList,
getCurrencyById:getCurrencyById
}