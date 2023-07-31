import { createContext, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import UpdateProduct from "../components/UpdateProduct";
import Productos from "../components/Productos";

const URL_BASE = "http://localhost:3001";

export const UpdateContext = createContext(false);

function Admin() {
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <UpdateContext.Provider value={setUpdate}>
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
  );
}

export default Admin;
