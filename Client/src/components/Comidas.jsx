import { useEffect, useState } from "react";
import axios from "axios";

const Comidas = () => {
  const [comidas, setComidas] = useState([]);
  const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get("https://dallas-backend-k4rb-dev.fl0.io/items");
        const response = await axios.get("https://dallas-backend-k4rb-dev.fl0.io/foods");

        setComidas(response.data);
        setItems(response2.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

 
  if (loading) {
    return (
    "");
  }

  const itemsConComidas = items.filter((item) =>
    comidas.some((com) => com.itemId === item.id)
  );

  return (
  <section>
    <div>
      <div className="mt-5 py-10 uppercase text-7xl text-white font-primary font-bold">
        <h1>Menu</h1>
        <h1 className="mt-4">Bebidas</h1>
      </div>
      <br />
      <div className="">
        {itemsConComidas.map((item) => {
          const { id, tipo } = item;
          const comidasFiltradas = comidas.filter((com) => com.itemId === id);

          const comidasActivas = comidasFiltradas.filter((com) => com.isActive === "Activo");

          if (comidasActivas.length > 0) {
            return (
              <div id={tipo} key={id}>
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">{tipo}</h1>
                {comidasActivas.map((com) => {
                  const { id, nombre, descripcion, precio } = com;
                  return (
                    <div key={id} className="text-white font-tertiary text-xl my-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <h2 className="uppercase py-3 font-semibold" style={{ letterSpacing: '0.1em' }}>{nombre}</h2>
                        <p className="text-2xl font-tertiary font-bold" style={{ letterSpacing: '0.1em' }}>${precio}</p>
                      </div>
                      <p className="flex flex-col text-neutral-400"> {descripcion} </p>
                      <br/>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            // No hay comidas activas para este tipo, no renderizar el título
            return null;
          }
        })}
      </div>
    </div>
  </section>
);

};

export default Comidas;
