import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../Views/Admin";
import axios from "axios";

const URL_BASE = "http://localhost:3001";

function UpdateProduct({ setUpdate }) {
  const { updateData } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(updateData);
    setValue("nombre", updateData.nombre);
    setValue("descripcion", updateData.descripcion);
    setValue("precio", updateData.precio);
    setValue("tipo", updateData.tipo);
    setValue("item", updateData.item?.tipo);
  }, []);

  const onSubmit = (data) => {
    axios.patch(`${URL_BASE}/update/${updateData.id}`, data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-0 space-y-6 p-10 flex flex-col text-black"
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
          <option value="Bebida">Bebida</option>
          <option value="Comida">Comida</option>
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
          <option value="Hamburguesas">Hamburguesas</option>
          <option value="Pizzas">Pizzas</option>
          <option value="Papas">Papas</option>
          <option value="Picadas">Picadas</option>
          <option value="Cervezas">Cervezas</option>
          <option value="Tragos">Tragos</option>
          <option value="Aperitivos">Aperitivos</option>
          <option value="Vinos">Vinos</option>
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
