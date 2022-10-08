const express = require("express");
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");
const appRoutes = require("./appRoutes");

const router = express.Router();

router.use("/api/users/", userRoutes);
router.use("/api/blogs/", blogRoutes);
router.use("/api/comments/", commentRoutes);
router.use("/api/app/", appRoutes)
module.exports = router;
