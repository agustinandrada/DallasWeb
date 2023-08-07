import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UpdateContext } from "../Views/Admin";

function Producto({ nombre, descripcion, precio }) {
  const setUpdate = useContext(UpdateContext);
  return (
    <div className=" flex flex-row justify-between border border-green-600 m-5">
      <h2>{nombre}</h2>
      <h2>{descripcion}</h2>
      <h2>{precio}</h2>
      <BiEdit className="cursor-pointer " onClick={() => setUpdate(true)} />
      <BsTrash className="cursor-pointer " />
    </div>
  );
}

// CREAR FUNCIONES PARA ELIMINAR Y EDITAR
// INSTALAR Y USAR SWEET ALERT PARA ELIMINAR

export default Producto;
