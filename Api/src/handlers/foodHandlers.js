const {
  allFoods,
  crear,
  actualizar,
} = require("../controllers/foodControllers");

const getFoods = async (req, res) => {
  const food = await allFoods();
  try {
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const post = async (req, res) => {
  try {
    const { imagen, nombre, tipo, precio, descripcion } = req.body;

    const newCarta = await crear({
      imagen,
      nombre,
      tipo,
      precio,
      descripcion,
    });
    res.status(201).json(newCarta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { imagen, nombre, tipo, precio, descripcion } = req.body;

    const updateCarta = await actualizar({
      imagen,
      nombre,
      tipo,
      precio,
      descripcion,
    });
    res.status(201).json(updateCarta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFoods,
  post,
};
