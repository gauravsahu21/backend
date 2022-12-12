const mongoose=require('mongoose');
const validator=require('validator');
const authorSchema=new mongoose.Schema({
    fullName:{type:String,maxLength:25},
    twiiterHandle:{type:String},
    email:{
        type:String,
        required:true,
        maxLength:50,
        validate:(value)=>validator.isEmail(value)
    },
    image:{
        type:String,
        //validate:(value)=>validator.isUrl(value)
    },
},

{_id:false}//it does not allow author schema to create a id
)
const Schema=new mongoose.Schema({
    title:{type:String,require:true,unique:true},
    author:{type:[authorSchema]},
    content:{type:String,default:""},
    publishedAt:{type:Date,default:null}
},
{timestamps:true}//will add createdAt AND updatedAt time
)
const blogModel=mongoose.model('blogs',Schema);
module.exports=blogModel;