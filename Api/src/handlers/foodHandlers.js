const {
  allFoods,
  crear,
  actualizar,
  deleteI,
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
    const { nombre, tipo, precio, descripcion, item } = req.body;

    const newCarta = await crear({
      nombre,
      tipo,
      precio,
      descripcion,
      item,
    });
    res.status(201).json(newCarta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;

  try {
    const update = await actualizar(id, req.body);

    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteI(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFoods,
  post,
  update,
  deleteItem,
};
