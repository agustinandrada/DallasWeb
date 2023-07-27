import { useState } from "react";

function CreateProduct({ setCreate, create }) {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    tipo: "",
    item: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL_BASE}/post`, form);
  };
  return (
    <div>
      <h1 className="text-center text-3xl text-white font-bold ">
        Crear Nuevo Producto
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
        <select
          name="tipo"
          className="border-2 border-gray-300 w-96 m-auto text-sm"
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Tipo
          </option>
          <option value="bebida">Bebida</option>
          <option value="comida">Comida</option>
        </select>
        <select
          name="item"
          className="border-2 border-gray-300 w-96 m-auto text-sm"
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Item
          </option>
          <option value="Hamburguesas">Hamburguesas</option>
          <option value="Pizzas">Pizzas</option>
          <option value="Papas">Papas</option>
          <option value="Picadas">Picadas</option>
          <option value="Cervezas">Cervezas</option>
          <option value="Tragos">Tragos</option>
          <option value="Aperitivos">Aperitivos</option>
          <option value="Vinos">Vinos</option>
        </select>
        <button className="bg-slate-600 border-l-rose-950 rounded-lg text-white text-lg  mt- mx-48 p-3 hover:bg-slate-500">
          Agregar Producto
        </button>
      </form>
      <button
        onClick={() => setCreate(false)}
        className="border border-slate-800 bg-red-900 w-max m-5 p-1"
      >
        Back
      </button>
    </div>
  );
}

export default CreateProduct;
