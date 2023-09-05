import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { UpdateContext } from "../Views/Admin";

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
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">
                  {tipo}
                </h1>
                {comidasFiltradas.map((comida) => {
                  const { id, nombre, descripcion, precio, tipo } = comida;
                  return (
                    <div
                      key={id}
                      className="text-white font-tertiary text-xl my-2 flex flex-col"
                    >
                      <div className="grid grid-flow-row grid-cols-4">
                        <h2
                          className="uppercase py-3 font-semibold"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          {nombre}
                        </h2>
                        <p
                          className="text-xl font-tertiary font-bold"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          ${precio}
                        </p>
                        <BiEdit
                          className="cursor-pointer relative my-auto mr-6 w-fit h-fit p-4 "
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
                        <BsTrash className="cursor-pointer relative my-auto mr-6 w-fit h-fit p-4 " />
                      </div>
                      <p className="flex flex-col text-neutral-400">
                        {" "}
                        {descripcion}{" "}
                      </p>
                      <br />
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
