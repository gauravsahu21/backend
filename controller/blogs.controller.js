const blog=require('../model/blogs.model.js');
//const {getAllBlogs,createNewBlog}=require('../services/blog.service.js');
const BlogService=require('../services/blog.service.js');
const BlogServiceInstance=new BlogService();
const getBlogs=async(req,res)=>{
    try{
        //const allBlogs=await blog.find({});
        const result=await BlogServiceInstance.getAllBlogs();
        res.status(200).json(result);

    }catch(ex){
      res.status(404).json(ex);
    }
}
const createBlog=async(req,res)=>{
    try{
        const result= await BlogServiceInstance.createNewBlog(req.body);
        res.status(200).json(result);
    }catch(ex)
    {
       res.status(400).json(ex);
    }
    
}
const deleteBlog=async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    try{
        const result=await blog.deleteOne({"_id":id});
        res.status(200).json(result);

    }
    catch(exp){
        res.status(404).json({message:"not found"});

    }

}
const searchTitleAndAuthor=async(req,res)=>{
    const {title,author}=req.query;
    try{
       const result=await blog.find({
        title,
        author:{$elemMatch:{email:author}}
    })
    res.status(200).json(result);
    }catch(err){
    res.status(404).json(err);

    }

}
module.exports={
    createBlog:createBlog,
    deleteBlog:deleteBlog,
    getBlogs:getBlogs,
    searchTitleAndAuthor:searchTitleAndAuthor
}