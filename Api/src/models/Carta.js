const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "carta",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: { type: DataTypes.ENUM("Comida", "Bebida"), allowNull: false },
      nombre: { type: DataTypes.STRING, allowNull: false },
      descripcion: { type: DataTypes.STRING, allowNull: false },
      precio: { type: DataTypes.FLOAT, allowNull: false },
      isActive: {
        type: DataTypes.ENUM("Activo", "Inactivo"),
        allowNull: false,
        defaultValue: "Activo",
      },
    },
    {
      timestamps: false,
    }
  );
};
