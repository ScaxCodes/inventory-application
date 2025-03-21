const express = require("express");
const server = express();
const viewRouter = require("./routes/viewRouter");

const PORT = process.env.PORT || 8000;

const path = require("node:path");
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use("/", viewRouter);

server.listen(PORT, () =>
  console.log(`Express Server running at http://localhost:${PORT}...`)
);
