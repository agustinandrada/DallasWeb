import axios from "axios";
import { useState } from "react";

const URL_BASE = "http://localhost:3001";

function Admin() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL_BASE}/post`, form);
  };
  return (
    <main className="bg-sky-800 w-max mx-auto rounded-md shadow-2xl mt-32 py-10">
      <h1 className="text-center text-3xl text-white font-bold ">
        Panel de administrador
      </h1>
      <form
        className="mb-0 space-y-6 p-10 flex flex-col "
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          className="border-2 border-gray-300 w-96 m-auto  text-sm"
          type="text"
          placeholder="Ingrese nombre del producto..."
        />
        <input
          onChange={handleChange}
          className="border-2 border-gray-300 w-96 m-auto text-sm"
          type="text"
          placeholder="Ingrese descripción del producto..."
        />
        <input
          onChange={handleChange}
          className="border-2 border-gray-300 w-96 m-auto text-sm"
          type="text"
          placeholder="Ingrese precio del producto..."
        />
        <button className="bg-slate-600 border-l-rose-950 rounded-lg text-white text-lg  mt- mx-48 p-3 hover:bg-slate-500">
          Agregar Producto
        </button>
      </form>
    </main>
  );
}

export default Admin;
