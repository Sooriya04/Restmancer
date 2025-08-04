const { blogPosts, generateBlog } = require("../api/blog");

exports.getBlogs = (req, res) => {
  let { limit = 10, fields } = req.query;
  limit = parseInt(limit);

  if (isNaN(limit) || limit < 1) {
    return res.status(400).json({ status: "error", message: "Invalid limit" });
  }

  let blogs = [...blogPosts];
  if (limit > 10) {
    const newBlogs = Array.from({ length: limit - 10 }, (_, i) =>
      generateBlog(11 + i)
    );
    blogs = [...blogs, ...newBlogs];
  }

  if (fields) {
    const selectedFields = fields.split(",");
    blogs = blogs.map((blog) => {
      const filtered = {};
      selectedFields.forEach((f) => {
        if (blog[f] !== undefined) {
          filtered[f] = blog[f];
        }
      });
      return filtered;
    });
  }

  res.json({
    status: "success",
    total: blogs.length,
    blogs: blogs.slice(0, limit),
  });
};
