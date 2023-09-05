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

  return (
    <ProductContext.Provider value={{ updateData }}>
      <UpdateContext.Provider value={{ setUpdate, setUpdateData }}>
        <main className="m-5 box-border p-5">
          {!create && !update ? (
            <div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setCreate(true);
                  }}
                  className="w-52 bg-white hover:bg-gray-200 text-black p-1 border rounded-md transition-transform transform hover:scale-105"
                >
                  Agregar Producto
                </button>
              </div>
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
