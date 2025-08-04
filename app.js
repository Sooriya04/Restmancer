const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("json spaces", 2); // Pretty-print JSON responses

const userRoutes = require("./routes/user.routes");
const blogRoutes = require("./routes/blog.route");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/documentation", (req, res) => {
  res.render("homepage");
});

app.get("/documentation/users", (req, res) => {
  res.render("users");
});
app.get("/documentation/blogs", (req, res) => {
  res.render("blog");
});
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
module.exports = app;
