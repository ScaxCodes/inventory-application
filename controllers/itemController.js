const db = require("../db/queries");

async function getAllItems(req, res) {
  const items = await db.getItems();
  console.log(items);
  res.json(items);
}

async function getCategoryItems(req, res) {
  // TODO: MAKE THIS DYNAMIC
  const items = await db.getItems();
  // items.filter((item) => item.category_name === req.params.category);
  const categoryName = "Evidence & Field Supplies";
  const filteredItems = items.filter(
    (item) => item.category_name === "Evidence & Field Supplies"
  );
  console.log(filteredItems);
  res.render("category", { categoryName, items: filteredItems });
}

module.exports = {
  getAllItems,
  getCategoryItems,
};
