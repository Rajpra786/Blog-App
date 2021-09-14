module.exports = (function(){
    'use strict';
    var router = require('express').Router();
    const auth = require("../../middleware/auth");
    const addComment = require('./addComment');
    const updateComment = require('./updateComment');
    const getComments = require('./getComments')
  
   // GET /api/comments/:boxId
  // POST  /api/comments/:boxId/new (Auth)  Add a new comment 
  // PUT   /api/comments/:boxId/:comment-id  (Auth) Update comment 
    
    router.get('/:commentboxid',getComments);
    router.post('/:commentboxid/new',auth, addComment);
    router.put('/:commentboxid/:commentid',auth,updateComment);
    
    return router;
  })();