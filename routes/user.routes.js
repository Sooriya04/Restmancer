const express = require("express");
const router = express.Router();
const User = require("../controllers/userController");

router.get("/users", User.getUsers);
router.get("/users/custom", User.getCustomUsers);

module.exports = router;
