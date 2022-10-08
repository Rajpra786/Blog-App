const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const addComment = require("../controllers/commentControllers/addComment");
const updateComment = require("../controllers/commentControllers/updateComment");
const getComments = require("../controllers/commentControllers/getComments");

router.get("/:commentBoxId", getComments);
router.post("/:commentBoxId/new", auth, addComment);
router.put("/:commentBoxId/:commentId", auth, updateComment);

module.exports = router;
