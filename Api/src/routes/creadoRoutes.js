const { Router } = require("express");

const { post } = require("../handlers/foodHandlers");

const creadoRoutes = Router();

creadoRoutes.post("/", post);

module.exports = creadoRoutes;
