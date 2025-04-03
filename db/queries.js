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
    FROM categories
    ORDER BY id ASC;
`;

const SQL_CATEGORIES_ID = /* sql */ `
    SELECT
      id
    FROM categories
    WHERE name = $1;
`;

const SQL_UPDATE_CATEGORY_NAME = /* sql */ `
  UPDATE categories SET name = $1 WHERE id = $2;
`;

const SQL_ADD_CATEGORY = /* sql */ `
  INSERT INTO categories (name) VALUES ($1);
`;

const SQL_ADD_ITEM = /* sql */ `
  INSERT INTO items (name, amount, category_id, manufacturer_id, price, orderablity)
  VALUES ($1, $2, $3, $4, $5, $6);
`;

// TODO: Select items / categories by id, not by name
const SQL_ITEM_ID = /* sql */ `
    SELECT
      items.id
    FROM items
    WHERE name = $1;
`;

const SQL_ITEM = /* sql */ `
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
    LEFT JOIN manufacturers ON items.manufacturer_id = manufacturers.id
    WHERE items.id = $1;
`;

const SQL_UPDATE_ITEM = /* sql */ `
  UPDATE items
  SET name = $1, amount = $2, category_id = $3, manufacturer_id = $4, price = $5, orderablity = $6
  WHERE id = $7;
`;

async function getItems() {
  const { rows } = await pool.query(SQL_ITEMS);
  return rows;
}

async function getCategories() {
  const { rows } = await pool.query(SQL_CATEGORIES);
  return rows;
}

// TODO: Add more logs similar to the one in getCategories

async function getCategoryID(category) {
  const { rows } = await pool.query(SQL_CATEGORIES_ID, [category]);
  return rows.length > 0 ? rows[0].id : null;
}

async function updateCategoryName(id, name) {
  const { rows } = await pool.query(SQL_UPDATE_CATEGORY_NAME, [name, id]);
  return rows;
}

async function addCategory(name) {
  const { rows } = await pool.query(SQL_ADD_CATEGORY, [name]);
  return rows;
}

async function addItem(
  name,
  amount,
  category_id,
  manufacturer_id,
  price,
  orderablity
) {
  const { rows } = await pool.query(SQL_ADD_ITEM, [
    name,
    amount,
    category_id,
    manufacturer_id,
    price,
    orderablity,
  ]);
  return rows;
}

async function getItemID(name) {
  const { rows } = await pool.query(SQL_ITEM_ID, [name]);
  return rows.length > 0 ? rows[0].id : null;
}

async function getItemByID(id) {
  const { rows } = await pool.query(SQL_ITEM, [id]);
  return rows.length > 0 ? rows[0] : null;
}

async function updateItem(
  name,
  amount,
  category_id,
  manufacturer_id,
  price,
  orderablity,
  id
) {
  const { rows } = await pool.query(SQL_UPDATE_ITEM, [
    name,
    amount,
    category_id,
    manufacturer_id,
    price,
    orderablity,
    id,
  ]);
  return rows;
}

module.exports = {
  getItems,
  getCategories,
  getCategoryID,
  updateCategoryName,
  addCategory,
  addItem,
  getItemID,
  getItemByID,
  updateItem,
};
