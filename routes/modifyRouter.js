const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const modifyRouter = Router();

//TODO: Should this be patch or post?
//TODO: WIP - NOT TESTED YET
modifyRouter.post("/:categoryName/edit", async (req, res, next) => {
  const { id, name } = req.body;
  try {
    // Update the category in the database by id
    await db.query("UPDATE categories SET name = $1 WHERE id = $2", [name, id]);
    // Redirect back to the index page (or you could redirect to another page if needed)
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
