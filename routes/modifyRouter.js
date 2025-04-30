const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const modifyRouter = Router();

//TODO: Should this be patch or post?
modifyRouter.patch("/:category/edit", categoryController.editCategory);
modifyRouter.patch("/:category/:id/edit", itemController.editItem);

modifyRouter.delete("/:category/:id", itemController.deleteItem);
modifyRouter.delete("/:category/", categoryController.deleteCategory);

module.exports = modifyRouter;
