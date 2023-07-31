import { useState } from "react";
import { useForm } from "react-hook-form";
function UpdateProduct({ setUpdate }) {
  //AGREGAR UN BUSCADOR POR NOMBRE PARA ENCONTRAR EL PRODUCTO MÁS RÁPIDO.

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-0 space-y-6 p-10 flex flex-col "
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="nombre">Nombre </label>
        <input type="text" {...register("nombre")} />
        <label htmlFor="descripcion">Descripcion </label>
        <input type="text" {...register("descripcion")} />
        <label htmlFor="precio">Precio </label>
        <input type="number" {...register("precio")} />
      </form>
      hola
      <button
        onClick={() => setUpdate(false)}
        className="border border-slate-800 bg-red-900 w-max m-5 p-1"
      >
        Back
      </button>
    </div>
  );
}

export default UpdateProduct;
