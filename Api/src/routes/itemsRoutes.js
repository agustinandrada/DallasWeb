const { Router } = require("express");

const getItems = require("../handlers/itemsHandlers");

const itemsRouter = Router();

itemsRouter.get("/", getItems);

module.exports = itemsRouter;
