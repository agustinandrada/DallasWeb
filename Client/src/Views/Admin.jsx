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
            <div className="flex justify-between items-start">
              <Productos />
              <div className="flex justify-center mt-20 mr-20 px-40 ">
                <button
                  onClick={() => {
                    setCreate(true);
                  }}
                  className=" bg-yellow-600 w-80 h-20 hover:bg-yellow-400 hover:text-black text-white font-secondary uppercase text-2xl font-bold p-1 rounded-md transition-transform transform hover:scale-105"
                  style={{letterSpacing:"1px"}}
                >
                  Agregar Producto
                </button>
              </div>
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
