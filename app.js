const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("json spaces", 2); // Pretty-print JSON responses

const userRoutes = require("./routes/user.routes");

app.get("/", (req, res) => {
  res.render("homepage");
});
app.get("/usersPages", (req, res) => {
  res.render("users");
});
app.use("/api", userRoutes);

module.exports = app;
