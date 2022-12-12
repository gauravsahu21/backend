const express=require('express');
const app=express();
const {data}=require('./users.json');
const {getUser,getUserById,getUserByAgeAndGender}=require('./controller/user.controller');
const userRoutes=require('./routes/user.routes.js');
const PORT=4000;
app.listen(PORT,()=>{
    console.log("listing..",PORT);
})

app.use('/user',userRoutes);


