module.exports = (function () {
	"use strict";
	var router = require("express").Router();
	const auth = require("../../middleware/auth");
	const createBlog = require("./createBlog");
	const getBlogById = require("./getBlogById");
	const getBlogs = require("./getBlogs");
	const updateBlog = require("./updateBlog");
	const getUploadUrl = require("./getUploadUrl");

	// POST  /api/blogs/new  (Auth)  Create a new blog
	// PUT   /api/blogs/:id   (Auth) Update a blog
	// GET   /api/blogs        Get blogs : pass filter parameters
	// GET   /api/blogs/:id    Get a blog by id

	router.get("/", getBlogs);
	router.get("/:id", getBlogById);
	router.get("/image/new/:imgName", auth, getUploadUrl);
	router.post("/new", auth, createBlog);
	router.put("/:id", auth, updateBlog);

	return router;
})();
