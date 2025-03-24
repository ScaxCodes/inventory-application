const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getCategories();
  console.log(categories);
  res.json(categories);
}

module.exports = {
  getAllCategories,
};
