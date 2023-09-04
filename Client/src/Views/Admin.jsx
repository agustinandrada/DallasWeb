import { createContext, useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import UpdateProduct from "../components/UpdateProduct";
import Productos from "../components/Productos";
import axios from "axios";

const URL_BASE = "http://localhost:3001";

export const UpdateContext = createContext(false);
export const ProductContext = createContext();

function Admin() {
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [productos, setProductos] = useState({});

  const obtenerProductos = async () => {
    const comidas = (await axios(`${URL_BASE}/foods`)).data;
    const bebidas = (await axios(`${URL_BASE}/drinks`)).data;
    setProductos([...comidas, ...bebidas]);
  };

  useEffect(() => {
    obtenerProductos();
    console.log(productos);
  }, [setProductos]);

  return (
    <ProductContext.Provider value={{ productos, updateData }}>
      <UpdateContext.Provider value={{ setUpdate, setUpdateData }}>
        <main className="m-10 box-border p-7">
          {!create && !update ? (
            <div>
              <button
                onClick={() => {
                  setCreate(true);
                }}
                className="bg-slate-600 border border-pink-800"
              >
                Crear nuevo Producto
              </button>
              <Productos />
            </div>
          ) : (
            <div>
              {create ? (
                <CreateProduct setCreate={setCreate} />
              ) : (
                <UpdateProduct setUpdate={setUpdate} />
              )}
            </div>
          )}
        </main>
      </UpdateContext.Provider>
    </ProductContext.Provider>
  );
}

export default Admin;
