const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const { Item } = require("./db");
const allItems = require("./controllers/itemControllers");

require("./db.js");

const app = express();

app.name = "API";

app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  cors({
    credentials: true,
    methods: "GET, POST, OPTIONS, PUT, DELETE, PATCH",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

app.use("/", routes);

app.use(async (err, req, res, next) => {
  try {
    const itemCount = await Item.count();

    if (itemCount === 0) {
      await allItems();
    }

    next();
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
