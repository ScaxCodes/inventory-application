const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const addRouter = Router();

addRouter.post("/add-category", categoryController.addCategory);

module.exports = addRouter;
