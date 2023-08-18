import { useContext } from "react";
import Producto from "./Producto";
import { ProductContext } from "../Views/Admin";

function Productos() {
  const { productos } = useContext(ProductContext);
  console.log(productos);
  return (
    <div className="flex justify-center mx-4 relative shadow-lg dark:shadow-slate-950">
      <h1 className="text-center">Productos</h1>
      {productos.length > 0 ? (
        productos.map((producto, id) => (
          <Producto
            key={id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            tipo={producto.tipo}
            item={producto.item}
          />
        ))
      ) : (
        <div>No hay ningun producto registrado en el sistema</div>
      )}
    </div>
  );
}

export default Productos;
