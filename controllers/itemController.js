const db = require("../db/queries");

async function getAllItems(req, res) {
  const items = await db.getItems();
  console.log(items);
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

module.exports = {
  getAllItems,
  getCategoryItems,
  getItemAddForm,
  addItem,
};
