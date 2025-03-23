const pool = require("./pool");

const SQL = /* sql */ `
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

async function getItems() {
  const { rows } = await pool.query(SQL);
  return rows;
}

module.exports = {
  getItems,
};
