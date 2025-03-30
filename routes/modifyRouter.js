const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const modifyRouter = Router();

//TODO: Should this be patch or post?
//TODO: Abstract to controller?
modifyRouter.post("/:categoryName/edit", async (req, res, next) => {
  const { id, name } = req.body;
  try {
    await db.updateCategoryName(id, name);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

modifyRouter.patch("/", (req, res) => {
  // Update the item in the database
});

modifyRouter.delete("/", (req, res) => {
  // Delete the item from the database
});

module.exports = modifyRouter;
