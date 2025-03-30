const pool = require("./pool");

const SQL_ITEMS = /* sql */ `
    SELECT 
      items.id,
      items.name,
      items.amount,
      categories.name AS category_name,
      manufacturers.name AS manufacturer_name,
      items.price,
      items.orderablity
    FROM items
    JOIN categories ON items.category_id = categories.id
    LEFT JOIN manufacturers ON items.manufacturer_id = manufacturers.id;
`;

const SQL_CATEGORIES = /* sql */ `
    SELECT
      id,
      name
    FROM categories;
`;

const SQL_CATEGORIES_ID = /* sql */ `
    SELECT
      id
    FROM categories
    WHERE name = $1;
`;

async function getItems() {
  const { rows } = await pool.query(SQL_ITEMS);
  return rows;
}

async function getCategories() {
  const { rows } = await pool.query(SQL_CATEGORIES);
  return rows;
}

async function getCategoryID(category) {
  const { rows } = await pool.query(SQL_CATEGORIES_ID, [category]);
  return rows.length > 0 ? rows[0].id : null;
}

module.exports = {
  getItems,
  getCategories,
  getCategoryID,
};
