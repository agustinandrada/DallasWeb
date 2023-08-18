import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UpdateContext } from "../Views/Admin";

function Producto({ nombre, descripcion, precio, tipo, item }) {
  const { setUpdate, setUpdateData } = useContext(UpdateContext);
  return (
    <div className="flex w-64 md:w-72 h-80 lg:h-72 rounded-lg bg-white flex-col relative shadow  mt-10 overflow-hidden">
      <div>
        <h2>{nombre}</h2>
      </div>
      <div className="">
        <h2>{descripcion}</h2>
      </div>
      <div>
        <h2>{precio}</h2>
      </div>
      <div className="flex">
        <BiEdit
          className="cursor-pointer relative  hover:bg-sky-700 hover:shadow-xl transition-all my-auto mr-6 z-10 w-fit h-fit p-4 bg-sky-500 rounded-full "
          onClick={() => {
            setUpdate(true);
            setUpdateData({ nombre, descripcion, precio, tipo, item });
          }}
        />
        <BsTrash className="bg-red-600 p-2.5 cursor-pointer my-auto border-bluey hover:bg-red-400  hover:shadow-xl w-fit h-fit border rounded-full" />
      </div>
    </div>
  );
}

// CREAR FUNCIONES PARA ELIMINAR Y EDITAR
// INSTALAR Y USAR SWEET ALERT PARA ELIMINAR

export default Producto;
