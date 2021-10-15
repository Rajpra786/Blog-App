var router = require("express").Router();
const auth = require("../../middleware/auth");
const login = require("./login");
const getMyProfile = require("./getMyProfile");
const getPublicProfile = require("./getPublicProfile");
const logout = require("./logout");
const register = require("./register");
const updateProfile = require("./updateProfile");

//session
router.post("/session", login);
router.delete("/session", logout);

//for users
router.post("/new", register);
router.get("/my", auth, getMyProfile);
router.get("/:id", getPublicProfile);
router.put("/:id", auth, updateProfile);

module.exports = router;
