const express = require("express");
const server = express();
const viewRouter = require("./routes/viewRouter");
const modifyRouter = require("./routes/modifyRouter");
const addRouter = require("./routes/addRouter");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8000;

server.use(express.urlencoded({ extended: false }));
server.use(express.static("public"));
server.use(methodOverride("_method"));

const path = require("node:path");
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use("/", viewRouter);
server.use("/", modifyRouter);
server.use("/", addRouter);

server.listen(PORT, () =>
  console.log(`Express Server running at http://localhost:${PORT}...`)
);
