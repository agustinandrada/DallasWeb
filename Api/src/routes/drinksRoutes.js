const { Router } = require("express");

const { getDrinks } = require("../handlers/drinkHandlers");

const drinksRoutes = Router();

drinksRoutes.get("/", getDrinks);

module.exports = drinksRoutes;
