import { createContext, useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import UpdateProduct from "../components/UpdateProduct";
import Productos from "../components/Productos";

export const UpdateContext = createContext(false);
export const ProductContext = createContext();

function Admin() {
  const [access, setAccess] = useState(false);
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAccess(true);
    }
  }, []);

  const accesHandler = () => {
    event.preventDefault();
    if (usuario === "prueba" && clave === "1234") {
      localStorage.setItem("user", "authenticated");
      setAccess(true);
    } else {
      setError("Credenciales Incorrectas");
    }
  };

  if (access === false) {
    return (
      <div className="container m-auto justify-center items-center text-center pt-20">
        <div className="flex justify-center items-center">
          <form className="space-y-4 flex flex-col text-black w-2/4 justify-center items-center">
            <h5
              className=" flex justify-center font-primary text-3xl text-yellow-400 font-bold uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Bienvenido!
            </h5>
            <br />
            <label
              className="text-white text-xl font-primary uppercase font-bold"
              htmlFor="Usuario"
            >
              Usuario
            </label>
            <input
              type="text"
              name="usuario"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="pl-2 font-bold "
            />
            <br />
            <br />
            <label
              className="text-white text-xl font-primary uppercase font-bold"
              htmlFor="Clave"
            >
              Clave
            </label>
            <input
              type="password"
              name="clave"
              id="clave"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              className="pl-2 font-bold "
            />
            <h5 className="text-red-400 font-bold">{error}</h5>
            <br />
            <br />
            <br />
            <button
              className="text-white border-2 font-primary text-2xl border-white w-52 m-auto bg-black rounded-md hover:bg-slate-800 transition-transform transform hover:scale-105"
              onClick={() => accesHandler()}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <ProductContext.Provider value={{ updateData }}>
      <UpdateContext.Provider value={{ setUpdate, setUpdateData }}>
        <main className="box-border p-3">
          {!create && !update ? (
            <div className="">
              <div className="pl-4">
                <button
                  onClick={() => {
                    setCreate(true);
                  }}
                  className=" bg-yellow-600 w-60 h-16 hover:bg-yellow-400 hover:text-black text-white font-secondary uppercase text-2xl font-bold rounded-md transition-transform transform hover:scale-105"
                  style={{ letterSpacing: "1px" }}
                >
                  Agregar Producto
                </button>
              </div>
              <Productos className="flex" />
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
