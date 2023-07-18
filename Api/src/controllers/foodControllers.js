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

const crear = async ({ imagen, nombre, tipo, descripcion, precio, item }) => {
  if (
    item.length !== 0 &&
    imagen.length !== 0 &&
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
        imagen,
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
