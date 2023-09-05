import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { UpdateContext } from "../Views/Admin";
import Swal from "sweetalert2";

const URL_BASE = "https://dallas-backend-k4rb-dev.fl0.io";//anotacion

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
  }, []);

  // Filtrar los "items" que tengan bebidas asociadas
  const itemsConComidas = items.filter((item) =>
    comidas.some((comida) => comida.itemId === item.id)
  );

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

            return (
              <div key={id}>
                <br/>
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">
                  {tipo}
                </h1>
                <br/>
                {comidasFiltradas.map((comida) => {
                  const { id, nombre, descripcion, precio, tipo } = comida;
                  return (
                    <div
                      key={id}
                      className="text-white font-tertiary text-xl my-2 flex flex-col"
                    >
                      <div className="grid grid-flow-row grid-cols-4 gap-20">
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
                        <BiEdit
                          className="cursor-pointer my-auto w-11 h-fit transition-transform transform hover:scale-150  hover:text-blue-700"
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
                        <BsTrash
                          className="cursor-pointer my-auto w-11 h-fit transition-transform transform hover:scale-150 hover:text-red-700"
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
                      <p className="flex flex-col text-neutral-400">
                        {" "}
                        {descripcion}{" "}
                      </p>
                      <br />
                      <hr/>
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
