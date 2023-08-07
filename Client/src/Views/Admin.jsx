import { createContext, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import UpdateProduct from "../components/UpdateProduct";
import Productos from "../components/Productos";

const URL_BASE = "http://localhost:3001";

const productos = [
  {
    nombre: "Hamburguesa completa",
    descripcion: "Tomate lechuga queso carne",
    precio: 1500,
    tipo: "comida",
    item: "hamburguesas",
  },
  {
    nombre: "Pizza napolitana",
    descripcion: "queso, tomate, oregano",
    precio: 2000,
    tipo: "comida",
    item: "pizzas",
  },
  {
    nombre: "Pizza especial",
    descripcion: "queso, jamon, morron",
    precio: 2000,
    tipo: "comida",
    item: "pizzas",
  },
  {
    nombre: "Heineken",
    descripcion: "Heineken 710cm",
    precio: 1000,
    tipo: "bebida",
    item: "cervezas",
  },
  {
    nombre: "Mojito",
    descripcion: "Ron, limón, azúcar, menta o eucalipto y agua mineral.",
    precio: 2300,
    tipo: "bebida",
    item: "tragos",
  },
  {
    nombre: "Fernet",
    descripcion: "Coca cola, branca",
    precio: 1800,
    tipo: "bebida",
    item: "tragos",
  },
];

export const UpdateContext = createContext(false);
export const ProductContext = createContext();

function Admin() {
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({});

  return (
    <ProductContext.Provider value={{ productos, updateData }}>
      <UpdateContext.Provider value={{ setUpdate, setUpdateData }}>
        <main className="bg-sky-800 w-max mx-auto rounded-md shadow-2xl mt-32 py-10">
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
