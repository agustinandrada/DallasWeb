const { Router } = require("express");

const { getFoods } = require("../handlers/foodHandlers");

const foodRoutes = Router();

foodRoutes.get("/", getFoods);

module.exports = foodRoutes;
