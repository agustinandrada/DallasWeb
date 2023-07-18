const { Item } = require("../db");

const allItems = async () => {
  let items = [
    {
      tipo: "Hamburguesas",
    },
    {
      tipo: "Pizzas",
    },
    {
      tipo: "Papas",
    },
    {
      tipo: "Tragos",
    },
    {
      tipo: "Cervezas",
    },
    {
      tipo: "Picadas",
    },
    {
      tipo: "Vinos",
    },
    {
      tipo: "Aperitivos",
    },
  ];

  const count = await Item.count();
  if (count === 0) {
    return Item.bulkCreate(items);
  } else {
    const temps = await Item.findAll();
    return temps;
  }
};

module.exports = allItems;
