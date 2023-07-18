const { Carta } = require("../db");

const allFoods = async () => {
  const comidas = await Carta.findAll({
    where: { tipo: "Comida" },
  });

  if (comidas.length === 0) {
    return "No se encontraron comidas";
  }

  return comidas;
};

const crear = async ({ imagen, nombre, tipo, descripcion, precio }) => {
  if (
    imagen.length != 0 &&
    nombre.length != 0 &&
    tipo.length != 0 &&
    descripcion.length != 0 &&
    precio.length != 0
  ) {
    const newCarta = await Carta.create({
      imagen,
      nombre,
      tipo,
      descripcion,
      precio,
    });
    return newCarta;
  } else {
    return statusCode(400);
  }
};

const actualizar = async ({ imagen, nombre, tipo, descripcion, precio }) => {
  if (
    imagen.length != 0 &&
    nombre.length != 0 &&
    tipo.length != 0 &&
    descripcion.length != 0 &&
    precio.length != 0
  ) {
    const newCarta = await Carta.create({
      imagen,
      nombre,
      tipo,
      descripcion,
      precio,
    });
    return newCarta;
  } else {
    return statusCode(400);
  }
};

module.exports = { crear, allFoods, actualizar };
