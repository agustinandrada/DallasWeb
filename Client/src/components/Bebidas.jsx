import { useEffect, useState } from "react";
import axios from "axios";

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get("http://localhost:3001/items");
        const response = await axios.get("http://localhost:3001/drinks");

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
        <h1 className="text-center uppercase text-3xl text-white font-primary font-bold">
          Bebidas
        </h1>
        <br />
        <div>
          {itemsConBebidas.map((item) => {
            const { id, tipo } = item;
            const bebidasFiltradas = bebidas.filter((beb) => beb.itemId === id);

            return (
              <div key={id}>
                <h1 className="uppercase text-2xl py-3 text-white font-secondary font-semibold">
                  {tipo}
                </h1>
                {bebidasFiltradas.map((beb) => {
                  const { id, nombre, descripcion, precio } = beb;
                  return (
                    <div
                      key={id}
                      className="text-white font-tertiary text-xl my-2"
                    >
                      <h2 className="uppercase py-3">{nombre}</h2>
                      <p>{descripcion}</p>
                      <p>$ {precio}</p>
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

export default Bebidas;
