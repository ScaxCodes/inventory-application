const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");

const viewRouter = Router();

viewRouter.get("/", categoryController.getAllCategories);

viewRouter.get("/all-items", itemController.getAllItems);

viewRouter.get("/:category", itemController.getCategoryItems);

module.exports = viewRouter;
