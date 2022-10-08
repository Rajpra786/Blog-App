var router = require("express").Router();
const auth = require("../middleware/auth");
const createBlog = require("../controllers/blogControllers/createBlog");
const getBlogById = require("../controllers/blogControllers/getBlogById");
const getBlogs = require("../controllers/blogControllers/getBlogs");
const updateBlog = require("../controllers/blogControllers/updateBlog");
const getUploadUrl = require("../controllers/blogControllers/getUploadUrl");

// POST  /api/blogs/new  (Auth)  Create a new blog
// PUT   /api/blogs/:id   (Auth) Update a blog
// GET   /api/blogs        Get blogs : pass filter parameters
// GET   /api/blogs/:id    Get a blog by id

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.get("/image/new/:imgName", auth, getUploadUrl);
router.post("/new", auth, createBlog);
router.put("/:id", auth, updateBlog);

module.exports = router;
