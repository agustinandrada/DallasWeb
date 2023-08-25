const { Router } = require("express");

const { deleteItem } = require("../handlers/foodHandlers");

const foodRoutes = Router();

foodRoutes.delete("/:id", deleteItem);

module.exports = foodRoutes;
