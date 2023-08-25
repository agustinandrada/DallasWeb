const { Carta, Item } = require("../db");

const allFoods = async () => {
  const comidas = await Carta.findAll({
    where: { tipo: "Comida" },
    include: [{ model: Item }],
  });

  if (comidas.length === 0) {
    return "No se encontraron comidas";
  }

  return comidas;
};

const crear = async ({ nombre, tipo, descripcion, precio, item }) => {
  if (
    item.length !== 0 &&
    nombre.length !== 0 &&
    tipo.length !== 0 &&
    descripcion.length !== 0 &&
    precio.length !== 0
  ) {
    const itemElegido = await Item.findOne({ where: { tipo: item } });
    const itemId = itemElegido.id;

    let [product, created] = await Carta.findOrCreate({
      where: { nombre, tipo, itemId },
      defaults: {
        nombre,
        tipo,
        descripcion,
        precio,
        itemId,
      },
    });

    if (!created) {
      throw new Error("Este producto ya existe");
    }

    return product;
  } else {
    throw new Error("Los campos son obligatorios");
  }
};

const actualizar = async (id, datos) => {
  const item = await Carta.findByPk(id);

  if (item) {
    const { nombre, tipo, descripcion, precio } = datos;

    item.nombre = nombre || item.nombre;
    item.tipo = tipo || item.tipo;
    item.descripcion = descripcion || item.descripcion;
    item.precio = precio || item.precio;

    await item.save();
    return item;
  } else {
    throw new Error("No se encontro el id");
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
