const { Carta, Item } = require("../db");

const allDrinks = async () => {
  const bebidas = await Carta.findAll({
    where: { tipo: "Bebida" },
    include: [{ model: Item }],
  });

  if (bebidas.length === 0) {
    return "No se encontraron bebidas.";
  }

  return bebidas;
};

module.exports = { allDrinks };
