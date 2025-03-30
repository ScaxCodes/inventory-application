const { Router } = require("express");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const db = require("../db/queries");

const viewRouter = Router();

viewRouter.get("/", categoryController.getAllCategories);
viewRouter.get("/all-items", itemController.getAllItems);

//TODO: Can we pass the category ID from here to the edit page?
viewRouter.param("category", categoryController.verifyCategory);
viewRouter.get("/:category", itemController.getCategoryItems);

//TODO: Abstract to controller?
viewRouter.get("/:category/edit", async (req, res) => {
  const categoryName = req.params.category;
  const categoryID = await db.getCategoryID(categoryName);
  res.render("editCategory", { categoryName, categoryID });
});

module.exports = viewRouter;
