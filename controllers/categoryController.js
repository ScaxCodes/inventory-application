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
      res.status(404).render("category", {
        categoryName: `Category ${req.params.category} not found`,
        items: [],
        categoryExists,
      });
    }
  } catch (error) {
    next(error);
  }
}

async function getCategoryEditForm(req, res) {
  const categoryName = req.params.category;
  const categoryID = await db.getCategoryID(categoryName);
  res.render("editCategory", { categoryName, categoryID });
}

async function editCategory(req, res, next) {
  const { id, name } = req.body;
  try {
    await db.updateCategoryName(id, name);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

async function getCategoryAddForm(req, res) {
  res.render("addCategory");
}

async function addCategory(req, res) {
  const { name } = req.body;
  try {
    await db.addCategory(name);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCategories,
  verifyCategory,
  getCategoryEditForm,
  editCategory,
  getCategoryAddForm,
  addCategory,
};
