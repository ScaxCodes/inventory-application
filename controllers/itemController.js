const db = require("../db/queries");

async function getAllItems(req, res) {
  const items = await db.getItems();
  console.log(items);
  res.json(items);
}

module.exports = {
  getAllItems,
};
