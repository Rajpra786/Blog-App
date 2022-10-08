var router = require("express").Router();
const auth = require("../middleware/auth");
const login = require("../controllers/userControllers/login");
const getMyProfile = require("../controllers/userControllers/getMyProfile");
const getPublicProfile = require("../controllers/userControllers/getPublicProfile");
const logout = require("../controllers/userControllers/logout");
const register = require("../controllers/userControllers/register");
const updateProfile = require("../controllers/userControllers/updateProfile");

//session
router.post("/session", login);
router.delete("/session", logout);

//for users
router.post("/new", register);
router.get("/my", auth, getMyProfile);
router.get("/:id", getPublicProfile);
router.put("/:id", auth, updateProfile);

module.exports = router;
