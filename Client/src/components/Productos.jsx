import Producto from "./Producto";

const productos = [
  {
    nombre: "Hamburguesa completa",
    descripcion: "Tomate lechuga queso carne",
    precio: 1500,
  },
  {
    nombre: "Pizza napolitana",
    descripcion: "queso, tomate, oregano",
    precio: 2000,
  },
  {
    nombre: "Pizza especial",
    descripcion: "queso, jamon, morron",
    precio: 2000,
  },
  {
    nombre: "Heineken",
    descripcion: "Heineken 710cm",
    precio: 1000,
  },
  {
    nombre: "Mojito",
    descripcion: "Ron, limón, azúcar, menta o eucalipto y agua mineral.",
    precio: 2300,
  },
  {
    nombre: "Fernet",
    descripcion: "Coca cola, branca",
    precio: 1800,
  },
];

function Productos() {
  return (
    <div className="text-center font-primary text-xl pl-2 text-white font-extrabold">
      <h1 >Productos</h1>
      <div className="text-center font-secondary text-lg font-semibold">
      {productos.map((producto, id) => (
        <Producto
          key={id}
          nombre={producto.nombre}
          // descripcion={producto.descripcion}
          // precio={producto.precio}
        />
      ))}
      </div>
    </div>
  );
}

export default Productos;
