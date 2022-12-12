const blog=require('../model/blogs.model');
// const getAllBlogs=async()=>{
//     const allBlogs=await blog.find({});
//     return allBlogs;

// }
// const createNewBlog=async(body)=>{
//     const newBlog=new blog(body);
//     const result= await newBlog.save();
//     return result;

// }//now use a class to 
class BlogService{
     getAllBlogs=async()=>{
        const allBlogs=await blog.find({});
        return allBlogs;
    
    }
     createNewBlog=async(body)=>{
        const newBlog=new blog(body);
        const result= await newBlog.save();
        return result;
    
    }


}
module.exports=BlogService;
// module.exports={
//     getAllBlogs:getAllBlogs,
//     createNewBlog:createNewBlog
// }