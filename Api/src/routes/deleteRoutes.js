const { Router } = require("express");

const { deleteItem } = require("../handlers/foodHandlers");

const foodRoutes = Router();

foodRoutes.get("/:id", deleteItem);

module.exports = foodRoutes;
