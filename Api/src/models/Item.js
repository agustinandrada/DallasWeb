const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "item",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM(
          "Hamburguesas",
          "Pizzas",
          "Papas",
          "Picadas",
          "Cervezas",
          "Tragos",
          "Aperitivos",
          "Vinos"
        ),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
