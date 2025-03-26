const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const viewRouter = Router();

viewRouter.get("/", categoryController.getAllCategories);
viewRouter.get("/all-items", itemController.getAllItems);

// TODO: Move this to categoryController
viewRouter.param("category", async (req, res, next, category) => {
  try {
    const categories = await db.getCategories();
    const categoryExists = categories.some((cat) => cat.name === category);
    if (categoryExists) {
      next();
    } else {
      // TODO: Improved 404 page, should look like the other categories page
      res.status(404).send("Category not found");
    }
  } catch (error) {
    next(error);
  }
});

// TODO: Test if this can be added here, instead of using viewRouter.param
viewRouter.get("/:category", itemController.getCategoryItems);

module.exports = viewRouter;
