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
        <label htmlFor="nombre">Nombre </label>
        <input
          type="text"
          {...register("nombre", {
            required: true,
          })}
        />
        {errors?.nombre && (
          <span className="text-red-800 text-sm font-medium">
            Campo requerido
          </span>
        )}
        <label htmlFor="descripcion">Descripcion </label>
        <input
          type="text"
          {...register("descripcion", {
            required: true,
          })}
        />
        {errors?.descripcion && (
          <span className="text-red-800 text-sm font-medium">
            Campo requerido
          </span>
        )}
        <label htmlFor="precio">Precio </label>
        <input
          type="number"
          {...register("precio", {
            required: true,
          })}
        />
        {errors?.precio && (
          <span className="text-red-800 text-sm font-medium">
            Campo requerido
          </span>
        )}

        {/* TIPO */}
        <select
          {...register("tipo", {
            validate: (value) => {
              return value !== "tipo";
            },
          })}
        >
          <option value="tipo" selected disabled>
            Tipo
          </option>
          <option value="bebida">Bebida</option>
          <option value="comida">Comida</option>
        </select>

        {errors?.tipo && (
          <span className="text-red-800 text-sm font-medium">
            Campo requerido
          </span>
        )}

        {/* ITEM */}
        <select
          {...register("item", {
            validate: (value) => {
              return value !== "item";
            },
          })}
        >
          <option value="item" selected disabled>
            Item
          </option>
          <option value="hamburguesas">Hamburguesas</option>
          <option value="pizzas">Pizzas</option>
          <option value="papas">Papas</option>
          <option value="picadas">Picadas</option>
          <option value="cervezas">Cervezas</option>
          <option value="tragos">Tragos</option>
          <option value="aperitivos">Aperitivos</option>
          <option value="vinos">Vinos</option>
        </select>
        {errors?.item && (
          <span className="text-red-800 text-sm font-medium">
            Campo requerido
          </span>
        )}
        <button>Submit</button>
      </form>

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
