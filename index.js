const express = require("express");
const server = express();
const path = require("node:path");
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

const PORT = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, () =>
  console.log(`Express Server running at http://localhost:${PORT}...`)
);
