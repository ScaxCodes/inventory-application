const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const modifyRouter = Router();

//TODO: Should this be patch or post?
modifyRouter.post("/:categoryName/edit", categoryController.editCategory);

modifyRouter.patch("/", (req, res) => {
  // Update the item in the database
});

modifyRouter.delete("/", (req, res) => {
  // Delete the item from the database
});

module.exports = modifyRouter;
