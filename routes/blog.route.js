const express = require("express");
const router = express.Router();
const { getBlogs } = require("../controllers/blogController");

router.get("/blogs", getBlogs);

module.exports = router;
