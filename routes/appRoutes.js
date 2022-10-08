var router = require("express").Router();
const isAuth = require("../middleware/isAuth");
const getPost = require("../controllers/appControllers/getPost");

// Get   /api/app/:id      Get all for a given blog id

router.get("/:id", isAuth, getPost);

module.exports = router;
