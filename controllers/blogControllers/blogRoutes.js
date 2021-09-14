module.exports = (function(){
  'use strict';
  var router = require('express').Router();
  const auth = require("../../middleware/auth");
  const createBlog = require('./createBlog');
  const getBlogById = require('./getBlogById'); 
  const getBlogs = require('./getBlogs'); 
  const updateBlog = require('./updateBlog');


// POST  /api/blogs/new  (Auth)  Create a new blog
// PUT   /api/blogs/:id   (Auth) Update a blog 
// POST  /api/blogs/:id/comments/new (Auth)  Add a new comment 
// PUT   /api/blogs/:id/comments/:comment-id  (Auth) Update comment 
// GET   /api/blogs        Get blogs : pass filter parameters 
// GET   /api/blogs/:id    Get a blog by id 

  //session
  router.get('/',getBlogs);
  router.get('/:id',getBlogById);

  router.post('/new',auth, createBlog);
  router.put('/:id',auth, updateBlog);
  
  return router;
})();