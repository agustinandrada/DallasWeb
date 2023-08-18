import { useContext } from "react";
import Producto from "./Producto";
import { ProductContext } from "../Views/Admin";

function Productos() {
  const { productos } = useContext(ProductContext);
  console.log(productos);
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 6ad75e64f3999d3414143aedfdb6ad1508acae4e
    </div>
  );
}

export default Productos;
