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

const actualizar = async (id, datos) => {
  const item = await Carta.findByPk(id);

  if (item) {
    const { imagen, nombre, tipo, descripcion, precio } = datos;

    item.imagen = imagen || item.imagen;
    item.nombre = nombre || item.nombre;
    item.tipo = tipo || item.tipo;
    item.descripcion = descripcion || item.descripcion;
    item.precio = precio || item.precio;

    await item.save;
    return item;
  } else {
    return statusCode(400);
  }
};

const deleteI = async (id) => {
  const item = await Carta.findByPk(id);

  if (item) {
    await item.destroy();
    return "Item eliminado con éxito";
  } else {
    throw new Error("Item no encontrado");
  }
};

module.exports = { crear, allFoods, actualizar, deleteI };
