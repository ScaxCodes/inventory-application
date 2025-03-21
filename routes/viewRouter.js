const { Router } = require("express");

const viewRouter = Router();

viewRouter.get("/", (req, res) => {
  res.render("index");
});

module.exports = viewRouter;
