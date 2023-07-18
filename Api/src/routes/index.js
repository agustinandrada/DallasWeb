const { Router } = require("express");
const foodRoutes = require("./foodRoutes");
const drinksRoutes = require("./drinksRoutes");
const creadoRoutes = require("./creadoRoutes");

const router = Router();

router.use("/foods", foodRoutes);

router.use("/drinks", drinksRoutes);

router.use("/post", creadoRoutes);

module.exports = router;
