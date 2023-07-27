import { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import UpdateProduct from "../components/UpdateProduct";

const URL_BASE = "http://localhost:3001";

function Admin() {
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);
  return (
    <main className="bg-sky-800 w-max mx-auto rounded-md shadow-2xl mt-32 py-10">
      {create === false && update === false ? (
        <div>
          <button
            onClick={() => {
              setCreate(true);
            }}
            className="border border-slate-800 bg-red-900 w-max m-5 p-1 "
          >
            Crear producto
          </button>
          <button
            onClick={() => {
              setUpdate(true);
            }}
            className="border border-slate-800 bg-red-900 w-max m-5 p-1"
          >
            Actualizar producto
          </button>
        </div>
      ) : create === true ? (
        <CreateProduct setCreate={setCreate} />
      ) : (
        <UpdateProduct />
      )}
    </main>
  );
}

export default Admin;
