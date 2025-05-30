const db = require("../db/queries");

async function getAllItems(req, res) {
  const items = await db.getItems();
  res.json(items);
}

async function getCategoryItems(req, res) {
  const items = await db.getItems();
  const filteredItems = items.filter(
    (item) => item.category_name === req.params.category
  );
  console.log(filteredItems);
  res.render("category", {
    categoryName: req.params.category,
    items: filteredItems,
    categoryExists: true,
  });
}

async function getItemAddForm(req, res) {
  const categoryName = req.params.category;
  res.render("addItem", { categoryName });
}

async function addItem(req, res) {
  const categoryID = await db.getCategoryID(req.params.category);

  const { name, amount, manufacturer, price, orderability } = req.body;
  try {
    await db.addItem(
      name,
      amount,
      categoryID,
      manufacturer,
      price,
      orderability
    );
    res.redirect(`/${req.params.category}`);
  } catch (err) {
    next(err);
  }
}

async function verifyItem(req, res, next, id) {
  if (isNaN(id)) {
    return res.status(400).render("error", {
      error: `Invalid ID format: ${id}`,
    });
  }
  try {
    const item = await db.getItemByID(id);
    if (item) {
      req.item = item;
      return next();
    }
    res.status(404).render("error", {
      error: `Item with ID ${req.params.id} not found`,
    });
  } catch (error) {
    next(error);
  }
}

async function getItemEditForm(req, res) {
  const categoryName = req.params.category;
  const categoryID = req.categoryID;
  const item = req.item;
  res.render("editItem", { categoryName, categoryID, item });
}

async function editItem(req, res, next) {
  const { name, amount, manufacturer, price, orderability, categoryID } =
    req.body;
  try {
    await db.updateItem(
      name,
      amount,
      categoryID,
      manufacturer,
      price,
      orderability,
      req.params.id
    );
    res.redirect(`/${req.params.category}`);
  } catch (err) {
    next(err);
  }
}

async function deleteItem(req, res, next) {
  try {
    await db.deleteItem(req.params.id);
    res.redirect(`/${req.params.category}`);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllItems,
  getCategoryItems,
  getItemAddForm,
  addItem,
  verifyItem,
  getItemEditForm,
  editItem,
  deleteItem,
};
