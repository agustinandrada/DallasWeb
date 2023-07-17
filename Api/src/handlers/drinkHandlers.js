const { allDrinks } = require("../controllers/drinksControllers");

const getDrinks = async (req, res) => {
  const drinks = await allDrinks();
  try {
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDrinks,
};
