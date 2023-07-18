const { Router } = require("express");
const foodRoutes = require("./foodRoutes");
const drinksRoutes = require("./drinksRoutes");
const creadoRoutes = require("./creadoRoutes");
const updateRoutes = require("./updateRoutes");
const deleteRoutes = require("./deleteRoutes");
const itemsRouter = require("./itemsRoutes");

const router = Router();

router.use("/foods", foodRoutes);

router.use("/drinks", drinksRoutes);

router.use("/post", creadoRoutes);

router.use("/update", updateRoutes);

router.use("/delete", deleteRoutes);

router.use("/items", itemsRouter);

module.exports = router;
