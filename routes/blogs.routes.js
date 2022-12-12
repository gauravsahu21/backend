const router=require('express').Router();
const {createBlog,deleteBlog,getBlogs,searchTitleAndAuthor}=require('../controller/blogs.controller.js');
router.get('/',getBlogs);
router.post('/new',createBlog);
router.get('/search',searchTitleAndAuthor);
router.delete('/:id',deleteBlog);

module.exports=router;