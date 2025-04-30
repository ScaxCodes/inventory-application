const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");

const modifyRouter = Router();

modifyRouter.patch("/:category/edit", categoryController.editCategory);
modifyRouter.patch("/:category/:id/edit", itemController.editItem);

modifyRouter.delete("/:category/:id", itemController.deleteItem);
modifyRouter.delete("/:category/", categoryController.deleteCategory);

module.exports = modifyRouter;
