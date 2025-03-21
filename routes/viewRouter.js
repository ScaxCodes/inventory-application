const { Router } = require("express");

const viewRouter = Router();

viewRouter.get("/", (req, res) => {
  res.render("index");
});

viewRouter.get("/evidence", (req, res) => {
  res.render("evidence");
});

viewRouter.get("/gear", (req, res) => {
  res.render("gear");
});

viewRouter.get("/break-time", (req, res) => {
  res.render("break-time");
});

viewRouter.get("/miscellaneous", (req, res) => {
  res.render("miscellaneous");
});

viewRouter.get("/:category/item/:id", (req, res) => {
  const { category, id } = req.params;
  res.render("item");
});

module.exports = viewRouter;
