const { Router } = require("express");
const categoryController = require("../controllers/categoryController");
const itemController = require("../controllers/itemController");

const addRouter = Router();

addRouter.post("/add-category", categoryController.addCategory);
addRouter.post("/:category/add-item", itemController.addItem);

module.exports = addRouter;
