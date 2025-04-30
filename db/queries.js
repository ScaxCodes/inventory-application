const pool = require("./pool");

const SQL_ITEMS = /* sql */ `
    SELECT 
      items.id,
      items.name,
      items.amount,
      categories.name AS category_name,
      manufacturers.name AS manufacturer_name,
      items.price,
      items.orderability
    FROM items
    JOIN categories ON items.category_id = categories.id
    LEFT JOIN manufacturers ON items.manufacturer_id = manufacturers.id
    ORDER BY id ASC;
`;

async function getItems() {
  const { rows } = await pool.query(SQL_ITEMS);
  return rows;
}

const SQL_CATEGORIES = /* sql */ `
    SELECT
      id,
      name
    FROM categories
    ORDER BY id ASC;
`;

async function getCategories() {
  const { rows } = await pool.query(SQL_CATEGORIES);
  return rows;
}

const SQL_CATEGORIES_ID = /* sql */ `
    SELECT
      id
    FROM categories
    WHERE name = $1;
`;

async function getCategoryID(category) {
  const { rows } = await pool.query(SQL_CATEGORIES_ID, [category]);
  return rows.length > 0 ? rows[0].id : null;
}

const SQL_UPDATE_CATEGORY_NAME = /* sql */ `
  UPDATE categories SET name = $1 WHERE id = $2;
`;

async function updateCategoryName(id, name) {
  const { rows } = await pool.query(SQL_UPDATE_CATEGORY_NAME, [name, id]);
  return rows;
}

const SQL_ADD_CATEGORY = /* sql */ `
  INSERT INTO categories (name) VALUES ($1);
`;

async function addCategory(name) {
  const { rows } = await pool.query(SQL_ADD_CATEGORY, [name]);
  return rows;
}

const SQL_ADD_ITEM = /* sql */ `
  INSERT INTO items (name, amount, category_id, manufacturer_id, price, orderability)
  VALUES ($1, $2, $3, $4, $5, $6);
`;

async function addItem(
  name,
  amount,
  category_id,
  manufacturer_id,
  price,
  orderability
) {
  const { rows } = await pool.query(SQL_ADD_ITEM, [
    name,
    amount,
    category_id,
    manufacturer_id,
    price,
    orderability,
  ]);
  return rows;
}

// TODO: Select items / categories by id, not by name
const SQL_ITEM_ID = /* sql */ `
    SELECT
      items.id
    FROM items
    WHERE name = $1;
`;

async function getItemID(name) {
  const { rows } = await pool.query(SQL_ITEM_ID, [name]);
  return rows.length > 0 ? rows[0].id : null;
}

const SQL_ITEM = /* sql */ `
    SELECT
      items.id,
      items.name,
      items.amount,
      categories.name AS category_name,
      manufacturers.id AS manufacturer_id,
      manufacturers.name AS manufacturer_name,
      items.price,
      items.orderability
    FROM items
    JOIN categories ON items.category_id = categories.id
    LEFT JOIN manufacturers ON items.manufacturer_id = manufacturers.id
    WHERE items.id = $1;
`;

async function getItemByID(id) {
  const { rows } = await pool.query(SQL_ITEM, [id]);
  return rows.length > 0 ? rows[0] : null;
}

const SQL_UPDATE_ITEM = /* sql */ `
  UPDATE items
  SET name = $1, amount = $2, category_id = $3, manufacturer_id = $4, price = $5, orderability = $6
  WHERE id = $7;
`;

async function updateItem(
  name,
  amount,
  category_id,
  manufacturer_id,
  price,
  orderability,
  id
) {
  const { rows } = await pool.query(SQL_UPDATE_ITEM, [
    name,
    amount,
    category_id,
    manufacturer_id,
    price,
    orderability,
    id,
  ]);
  return rows;
}

const SQL_DELETE_ITEM = /* sql */ `
  DELETE FROM items WHERE id = $1;
`;

async function deleteItem(id) {
  const { rows } = await pool.query(SQL_DELETE_ITEM, [id]);
  return rows;
}

const SQL_DELETE_CATEGORY = /* sql */ `
  DELETE FROM categories WHERE id = $1;
`;

async function deleteCategory(id) {
  const { rows } = await pool.query(SQL_DELETE_CATEGORY, [id]);
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
  deleteItem,
  deleteCategory,
};
