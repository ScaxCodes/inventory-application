const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const viewRouter = Router();

viewRouter.get("/", categoryController.getAllCategories);
viewRouter.get("/all-items", itemController.getAllItems);

viewRouter.get("/add-category", categoryController.getCategoryAddForm);

//TODO: Can we pass the category ID from here to the edit page? (to reduce db calls)
viewRouter.param("category", categoryController.verifyCategory);
viewRouter.get("/:category", itemController.getCategoryItems);

viewRouter.get("/:category/edit", categoryController.getCategoryEditForm);
viewRouter.get("/:category/add-item", itemController.getItemAddForm);
viewRouter.get("/:category/:id/edit", itemController.getItemEditForm);

module.exports = viewRouter;
