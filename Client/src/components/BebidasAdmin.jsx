import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { UpdateContext } from "../Views/Admin";
import Swal from "sweetalert2";

const URL_BASE = "https://dallas-backend-k4rb-dev.fl0.io";

const BebidasAdmin = () => {
  const [bebidas, setBebidas] = useState([]);
  const [items, setItems] = useState([]);

  const { setUpdate, setUpdateData } = useContext(UpdateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get(
          "https://dallas-backend-k4rb-dev.fl0.io/items"
        );
        const response = await axios.get(
          "https://dallas-backend-k4rb-dev.fl0.io/drinks"
        );

        setBebidas(response.data);
        setItems(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const itemsConBebidas = items.filter((item) =>
    bebidas.some((beb) => beb.itemId === item.id)
  );

  return (
    <section>
      <div>
        <div className="mt-5 py-10 uppercase text-7xl text-white font-primary font-bold">
          <h1>Menu</h1>
          <h1 className="mt-4">Bebidas</h1>
        </div>
        <br />
        <div>
          {itemsConBebidas.map((item) => {
            const { id, tipo } = item;
            const bebidasFiltradas = bebidas.filter((beb) => beb.itemId === id);

            return (
              <div key={id}>
                <br />
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">
                  {tipo}
                </h1>
                <br />
                {bebidasFiltradas.map((beb) => {
                  const { id, nombre, descripcion, precio, tipo } = beb;
                  return (
                    <div
                      key={id}
                      className="text-white font-tertiary text-xl my-2 flex flex-col"
                    >
                      <div className="grid grid-cols-2 gap-0">
                        <div>
                          <h2
                            className="uppercase text-2xl py-3 font-semibold"
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
                            className="cursor-pointer m-auto py-2 my-auto w-11 h-fit transition-transform transform hover:scale-150  hover:text-blue-700"
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
                            className="cursor-pointer py-2 m-auto my-auto w-11 h-fit transition-transform transform hover:scale-150  hover:text-red-700"
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

export default BebidasAdmin;
