const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const addComment = require("./addComment");
const updateComment = require("./updateComment");
const getComments = require("./getComments");

router.get("/:commentBoxId", getComments);
router.post("/:commentBoxId/new", auth, addComment);
router.put("/:commentBoxId/:commentId", auth, updateComment);

module.exports = router;
