import { useContext } from "react";
import Producto from "./Producto";
import { ProductContext } from "../Views/Admin";

function Productos() {
  const { productos } = useContext(ProductContext);
  return (
    <div>
      <h1 className="text-center">Productos</h1>
      {productos.map((producto, id) => (
        <Producto
          key={id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          tipo={producto.tipo}
          item={producto.item}
        />
      ))}
    </div>
  );
}

export default Productos;
