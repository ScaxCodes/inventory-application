const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const modifyRouter = Router();

//TODO: Should this be patch or post?
modifyRouter.post("/:category/edit", categoryController.editCategory);
modifyRouter.post("/:category/:id/edit", itemController.editItem);

modifyRouter.patch("/", (req, res) => {
  // Update the item in the database
});

modifyRouter.delete("/:category/:id", itemController.deleteItem);

module.exports = modifyRouter;
