import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { BsTrash, BsArrowClockwise } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { UpdateContext } from "../Views/Admin";
import Swal from "sweetalert2";

const URL_BASE = "https://dallas-backend-k4rb-dev.fl0.io"; //anotacion

const ComidasAdmin = () => {
  const [comidas, setComidas] = useState([]);
  const [items, setItems] = useState([]);
  const { setUpdate, setUpdateData } = useContext(UpdateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get(
          "https://dallas-backend-k4rb-dev.fl0.io/items"
        );
        const response = await axios.get(
          "https://dallas-backend-k4rb-dev.fl0.io/foods"
        );

        setComidas(response.data);
        setItems(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [comidas]);

  const itemsConComidas = items.filter((item) =>
    comidas.some((comida) => comida.itemId === item.id)
  );

  const ordenarComidasPorNombre = (a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
    return 0;
  };

  return (
    <section>
      <div>
        <div className="mt-5 py-10 uppercase text-7xl text-white font-primary font-bold">
          <h1>Menu</h1>
          <h1 className="mt-4">Comidas</h1>
        </div>
        <br />
        <br />
        <div className="">
          {itemsConComidas.map((item) => {
            const { id, tipo } = item;
            const comidasFiltradas = comidas.filter(
              (comida) => comida.itemId === id
            );
            comidasFiltradas.sort(ordenarComidasPorNombre);

            return (
              <div key={id}>
                <br />
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">
                  {tipo}
                </h1>
                <br />
                {comidasFiltradas.map((comida) => {
                  const { id, nombre, descripcion, precio, tipo, isActive } =
                    comida;
                  return (
                    <div
                      key={id}
                      className={`text-white font-tertiary text-xl my-2 flex flex-col ${
                        isActive === "Activo" ? "" : "bg-yellow-700 opacity-30"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-0">
                        <div>
                          <h2
                            className="uppercase py-3 font-semibold"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            {nombre}
                          </h2>
                          <p
                            className="text-2xl py-5 font-tertiary font-bold"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            ${precio}
                          </p>
                        </div>
                        <div>
                          <BiEdit
                            className="cursor-pointer py-2 m-auto my-auto w-11 h-fit transition-transform transform hover:scale-150  hover:text-blue-700"
                            onClick={() => {
                              setUpdate(true);
                              setUpdateData({
                                nombre,
                                descripcion,
                                precio,
                                tipo,
                                item,
                                id,
                              });
                            }}
                          />
                          {isActive === "Activo" ? (
                            <GiCancel
                              className="cursor-pointer py-2 m-auto my-auto w-11 h-fit transition-transform transform hover:scale-150  hover:text-yellow-500"
                              onClick={() => {
                                Swal.fire({
                                  title: "¿Deseas desactivar este producto?",
                                  text: "Realiza esta acción si no hay más stock",
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#3085d6",
                                  cancelButtonColor: "#d33",
                                  confirmButtonText: "Si, desactivar",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    axios
                                      .patch(`${URL_BASE}/update/${id}`, {
                                        isActive: "Inactivo",
                                      })
                                      .then(() =>
                                        Swal.fire(
                                          "Desactivado",
                                          "Tu producto ha sido desactivado.",
                                          "success"
                                        )
                                      );
                                  }
                                });
                              }}
                            />
                          ) : (
                            <BsArrowClockwise
                              className="cursor-pointer py-2 m-auto my-auto w-11 h-fit transition-transform transform hover:scale-150  hover:text-yellow-500  "
                              onClick={() => {
                                Swal.fire({
                                  title: "¿Deseas activar este producto?",
                                  text: "Realiza esta acción si renovaste el stock",
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#3085d6",
                                  cancelButtonColor: "#d33",
                                  confirmButtonText: "Si, activar",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    axios
                                      .patch(`${URL_BASE}/update/${id}`, {
                                        isActive: "Activo",
                                      })
                                      .then(() =>
                                        Swal.fire(
                                          "Activado",
                                          "Tu producto ha sido activado.",
                                          "success"
                                        )
                                      );
                                  }
                                });
                              }}
                            />
                          )}
                          <BsTrash
                            className="cursor-pointer py-2 m-auto my-auto w-11 h-fit transition-transform transform hover:scale-150 hover:text-red-700"
                            onClick={() => {
                              Swal.fire({
                                title: "¿Seguro que deseas eliminar?",
                                text: "No podrás revertir esto",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Si, elimínalo!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  axios.delete(`${URL_BASE}/delete/${id}`);
                                  Swal.fire(
                                    "Eliminado!",
                                    "Tu producto ha sido eliminado.",
                                    "success"
                                  ).then(() => {
                                    window.location.reload();
                                  });
                                }
                              });
                            }}
                          />
                        </div>
                      </div>
                      <p className="flex flex-col text-neutral-400">
                        {" "}
                        {descripcion}{" "}
                      </p>
                      <br />
                      <hr />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ComidasAdmin;
