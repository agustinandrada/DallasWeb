import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png"

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


if (loading) {
  return (
    <div className="flex justify-center items-center text-center">
  <div className="w-90 h-58 m-auto flex items-center invert-colors">
    <img src={logo} alt="Cargando..." className="mx-auto rotate" />
  </div>
</div>
  );
}


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
      <div className="">
        {itemsConBebidas.map((item) => {
          const { id, tipo } = item;
          const bebidasFiltradas = bebidas.filter((beb) => beb.itemId === id);

          const bebidasActivas = bebidasFiltradas.filter((beb) => beb.isActive === "Activo");

          if (bebidasActivas.length > 0) {
            return (
              <div id={tipo} key={id}>
                <h1 className="uppercase text-5xl text-yellow-400 font-secondary font-semibold">{tipo}</h1>
                {bebidasActivas.map((beb) => {
                  const { id, nombre, descripcion, precio } = beb;
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
            // No hay bebidas activas para este tipo, no renderizar el título
            return null;
          }
        })}
      </div>
    </div>
  </section>
);

};

export default Bebidas;
