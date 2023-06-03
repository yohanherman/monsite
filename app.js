const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const morgan = require("morgan");
const routes = require("./public/routes/routes");

require("./public/javascripts/database/database");
exports.app = app;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log("port 3000 à l'ecoute");
});
