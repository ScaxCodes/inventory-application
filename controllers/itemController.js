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
  });
}

async function getItemAddForm(req, res) {
  const categoryName = req.params.category;
  res.render("addItem", { categoryName });
}

module.exports = {
  getAllItems,
  getCategoryItems,
  getItemAddForm,
};
