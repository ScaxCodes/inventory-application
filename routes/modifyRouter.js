const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const modifyRouter = Router();

modifyRouter.patch("/", (req, res) => {
  // Update the item in the database
});

modifyRouter.delete("/", (req, res) => {
  // Delete the item from the database
});

module.exports = modifyRouter;
