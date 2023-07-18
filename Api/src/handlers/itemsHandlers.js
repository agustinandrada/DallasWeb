const allItems = require("../controllers/itemControllers");

const getItems = async (req, res) => {
  try {
    const items = await allItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getItems;
