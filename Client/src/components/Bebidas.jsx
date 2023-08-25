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
        <div className="mt-5 py-10 uppercase text-7xl text-white font-primary font-bold">
        <h1>
          Menu
        </h1>
        <h1 className="mt-4">
          Bebidas
        </h1>
        </div>
        <br />
        <div>
          {itemsConBebidas.map((item) => {
            const { id, tipo } = item;
            const bebidasFiltradas = bebidas.filter((beb) => beb.itemId === id);

            return (
              <div key={id}>
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">
                  {tipo}
                </h1>
                {bebidasFiltradas.map((beb) => {
                  const { id, nombre, descripcion, precio } = beb;
                  return (
                    <div  key={id} className="text-white font-tertiary text-xl my-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <h2 className="uppercase py-3 font-semibold" style={{ letterSpacing: '0.1em' }}>{nombre}</h2>
                        <p className="text-xl font-tertiary font-bold" style={{ letterSpacing: '0.1em' }}>${precio}</p>
                      </div>
                      <p className="flex flex-col text-neutral-400"> {descripcion} </p>
                      <br/>
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
