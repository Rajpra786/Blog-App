const express = require("express");
const userRoutes = require("./controllers/userControllers/userRoutes");
const blogRoutes = require("./controllers/blogControllers/blogRoutes");
const commentRoutes = require("./controllers/commentControllers/commentRoutes");

const router = express.Router();

router.use("/api/users/", userRoutes);
router.use("/api/blogs/", blogRoutes);
router.use("/api/comments/", commentRoutes);

module.exports = router;
