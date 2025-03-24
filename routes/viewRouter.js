const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");

const viewRouter = Router();

viewRouter.get("/", categoryController.getAllCategories);

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
