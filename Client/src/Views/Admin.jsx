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
      <main className="bg-black bg-opacity-70 p-4 rounded-lg shadow-md mt-16 mx-60">
        {!create && !update ? (
          <div>
            <p
              onClick={() => {
                setCreate(true);
              }}
              className="text-black text-start btn text-xs py-2 font-primary font-bold cursor-pointer"
            >
            Nuevo Producto
            </p>
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
