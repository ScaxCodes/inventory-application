const pool = require("./pool");

async function getItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

module.exports = {
  getItems,
};
