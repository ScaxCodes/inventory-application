const { Router } = require("express");

const newItemRouter = Router();

newItemRouter.post("/", (req, res) => {
  // Add the new item to the database
});

module.exports = newItemRouter;
