const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getCategories();
  console.log(categories);
  res.render("index", { categories });
}

async function verifyCategory(req, res, next, category) {
  try {
    const categories = await db.getCategories();
    const foundCategory = categories.find((cat) => cat.name === category);
    if (foundCategory) {
      req.categoryID = foundCategory.id;
      return next();
    }
    res.status(404).render("error", {
      error: `Category ${req.params.category} not found`,
    });
  } catch (error) {
    next(error);
  }
}

async function getCategoryEditForm(req, res) {
  const categoryName = req.params.category;
  const categoryID = req.categoryID;
  // const categoryID = await db.getCategoryID(categoryName);
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

async function deleteCategory(req, res, next) {
  const categoryID = await db.getCategoryID(req.params.category);
  const items = await db.getItems();
  const filteredItems = items.filter(
    (item) => item.category_name === req.params.category
  );
  const categoryHasItems = filteredItems.length > 0;

  if (categoryHasItems) {
    return res.status(409).render("error", {
      error: `Cannot delete category ${req.params.category} because it has items. Delete them first.`,
    });
  }

  try {
    await db.deleteCategory(categoryID);
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
  deleteCategory,
};
