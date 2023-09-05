import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../Views/Admin";
import axios from "axios";

const URL_BASE = "https://dallas-backend-k4rb-dev.fl0.io";

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
        className="mb-0 space-y-6 p-10 flex flex-col text-black w-2/4 m-auto"
      >
        <label className="text-white" htmlFor="nombre">
          Nombre{" "}
        </label>
        <input
          className="p-1 rounded-sm"
          type="text"
          {...register("nombre", {
            required: true,
          })}
        />
        {errors?.nombre && (
          <span className="text-red-500 text-sm font-medium">
            Campo requerido
          </span>
        )}
        <label className="text-white" htmlFor="descripcion">
          Descripcion{" "}
        </label>
        <textarea
          className="p-1 rounded-sm h-40"
          type="text"
          {...register("descripcion", {
            required: true,
          })}
        />
        {errors?.descripcion && (
          <span className="text-red-500 text-sm font-medium">
            Campo requerido
          </span>
        )}
        <label className="text-white" htmlFor="precio">
          Precio{" "}
        </label>
        <input
          className="p-1 rounded-sm w-52"
          type="number"
          {...register("precio", {
            required: true,
          })}
        />
        {errors?.precio && (
          <span className="text-red-500 text-sm font-medium">
            Campo requerido
          </span>
        )}

        {/* TIPO */}
        <select
          className="p-1 rounded-sm h-9 origin-top"
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
          <span className="text-red-500 text-sm font-medium">
            Campo requerido
          </span>
        )}

        {/* ITEM */}
        <select
          className="p-1 rounded-sm h-9 origin-top"
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
          <span className="text-red-500 text-sm font-medium">
            Campo requerido
          </span>
        )}
        <button className="text-white border-2 border-white w-52 m-auto bg-black rounded-md">
          Submit
        </button>
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
