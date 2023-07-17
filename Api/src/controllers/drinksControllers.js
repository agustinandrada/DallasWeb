const { Carta } = require("../db");

const allDrinks = async () => {
  const bebidas = await Carta.findAll({
    where: { tipo: "Bebida" },
  });

  if (bebidas.length === 0) {
    return "No se encontraron bebidas.";
  }

  return bebidas;
};

module.exports = { allDrinks };
