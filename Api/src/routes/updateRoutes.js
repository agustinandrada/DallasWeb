const { Router } = require("express");

const { update } = require("../handlers/foodHandlers");

const foodRoutes = Router();

foodRoutes.get("/:id", update);

module.exports = foodRoutes;
