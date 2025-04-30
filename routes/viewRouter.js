const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");

const viewRouter = Router();

viewRouter.get("/", categoryController.getAllCategories);
viewRouter.get("/all-items", itemController.getAllItems);

viewRouter.get("/add-category", categoryController.getCategoryAddForm);

viewRouter.param("category", categoryController.verifyCategory);
viewRouter.get("/:category", itemController.getCategoryItems);

viewRouter.get("/:category/edit", categoryController.getCategoryEditForm);
viewRouter.get("/:category/add-item", itemController.getItemAddForm);

viewRouter.param("id", itemController.verifyItem);
viewRouter.get("/:category/:id/edit", itemController.getItemEditForm);

module.exports = viewRouter;
