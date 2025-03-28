const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getCategories();
  console.log(categories);
  res.render("index", { categories });
}

// TODO: Remove add item button from category page, when category is not found
async function verifyCategory(req, res, next, category) {
  try {
    const categories = await db.getCategories();
    const categoryExists = categories.some((cat) => cat.name === category);
    if (categoryExists) {
      next();
    } else {
      res.status(404).render("category", {
        categoryName: `Category ${req.params.category} not found`,
        items: [],
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCategories,
  verifyCategory,
};
