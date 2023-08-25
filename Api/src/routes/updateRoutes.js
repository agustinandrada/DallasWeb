const { Router } = require("express");

const { update } = require("../handlers/foodHandlers");

const foodRoutes = Router();

foodRoutes.patch("/:id", update);

module.exports = foodRoutes;
