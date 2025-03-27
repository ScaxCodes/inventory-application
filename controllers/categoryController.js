const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getCategories();
  console.log(categories);
  res.render("index", { categories });
}

async function verifyCategory(req, res, next, category) {
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
}

module.exports = {
  getAllCategories,
  verifyCategory,
};
