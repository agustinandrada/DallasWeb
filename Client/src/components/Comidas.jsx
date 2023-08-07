import { useEffect, useState } from "react";
import axios from "axios";

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get("http://localhost:3001/items");
        const response = await axios.get("http://localhost:3001/foods");

        setBebidas(response.data);
        setItems(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Filtrar los "items" que tengan bebidas asociadas
  const itemsConBebidas = items.filter((item) =>
    bebidas.some((beb) => beb.itemId === item.id)
  );

  return (
    <section>
      <div>
        <hr/>
        <h1 className="text-center uppercase text-xl">Comidas</h1>
        <br />
        <div className="">
          {itemsConBebidas.map((item) => {
            const { id, tipo } = item;
            const bebidasFiltradas = bebidas.filter((beb) => beb.itemId === id);

            return (
              <div key={id}>
                <h1 className="uppercase text-xl py-3">{tipo}</h1>
                {bebidasFiltradas.map((beb) => {
                  const { id, nombre, descripcion, precio } = beb;
                  return (
                    <div key={id}>
                      <h2 className="uppercase text-l py-3">{nombre}</h2>
                      <p>{descripcion}</p>
                      <p>$ {precio}</p>
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
