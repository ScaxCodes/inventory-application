const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const addRouter = Router();

addRouter.post("/addCategory", categoryController.addCategory);

module.exports = addRouter;
