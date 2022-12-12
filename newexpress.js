require('dotenv').config();
const express=require("express");
const app=express();
const {data}=require('./currencies.json');
const {getCurrencyList,getCurrencyById}=require('./controller/currency.controller');
const currencyroutes=require('./routes/currency.routes.js')
const {verifyAuth}=require('./user-middleware.js');
const blogRoutes=require('./routes/blogs.routes.js');
const discussionRoutes=require('./routes/discussion.routes');
const authRoutes=require('./routes/auth.routes.js');
const mongoose=require('mongoose');
 
const passport = require("passport");
const jwtStrategy=require('./config/passport');



const cors=require('cors');

const PORT=4000;
mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("Cnnected to DB")
    app.listen(PORT,()=>{
        console.log("listing..",PORT);
    })
}).catch(()=>{
    console.log("not connected");
})



app.use(express.json());//used as middleware to read req.body

app.use(passport.initialize());
passport.use("jwt",jwtStrategy);
app.use(cors());//cross orgin platform access
app.use(verifyAuth);
app.use('/currency',verifyAuth,currencyroutes);//selective miidleware verifyAuth

app.use('/blog',blogRoutes);
app.use('/auth',authRoutes);

app.use('/new',discussionRoutes);
// app.get("/",(req,res)=>{
//     //res.write('<h1>Hello Gaurav is here</h1>')
//     //res.send('<h1>Hello Gaurav is here</h1>')//res.send() take care of sending data back and also ending it actually it is a wrapper of write and end 
//     //res.json({serverStatus:"ACtive"});
//     //res.end();
//     res.status(200).send('<h1>Currency Database</h1>');
    
// })
// app.get("/currencies",(req,res)=>{
//     const num=req.query.min_value;
//     console.log(num) ;
//     if(num)
//     {
//     const k=data.filter(d=>Number(d.min_size)===Number(num));
//     console.log(k);
//     res.status(200).json(k);}
//     else
//     {
//     res.status(200).json(data);
//     }
// }
// )
//app.get("/currencies",getCurrencyList);
// app.get("/currencies/:symbol",(req,res)=>{
//    const cur=req.params.symbol;
//    const k=data.find(x=>x.id===cur.toUpperCase());
//    if(k)
//    {
//    res.status(200).json(k);}
//    else{
//     console.log("yes");
//      res.status(404).json({message:"invalidSymbol"});
//    }
// })
// app.get("/currencies/:symbol",getCurrencyById);

// app.get("/currencies?min_value=<number>",(req,res)=>{
//     const num=req.query.min_value;
//     console.log(num);
//     const k=data.find(x=>x.min_size===num);
//     res.status(200).json(k);

// })
