import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../Views/Admin";
import axios from "axios";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Cargando...",
      imageUrl: "https://usagif.com/wp-content/uploads/loading-4.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showConfirmButton: false,
    });
    axios.patch(`${URL_BASE}/update/${updateData.id}`, data).then(() => {
      Swal.fire("OK", "Producto modificado exitosamente", "success").then(
        () => {
          window.location.reload();
        }
      );
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-0 space-y-6 p-10 flex flex-col text-black w-2/4 m-auto"
      >
        <label className="text-white text-xl font-primary uppercase font-bold" style={{letterSpacing:"1px"}} htmlFor="nombre">
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
          <span className="text-red-500 text-m font-medium">
            Campo requerido
          </span>
        )}
        <label className="text-white text-xl font-primary uppercase font-bold" style={{letterSpacing:"1px"}} htmlFor="descripcion">
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
          <span className="text-red-500 text-m font-medium">
            Campo requerido
          </span>
        )}
        <label className="text-white text-xl font-primary uppercase font-bold" style={{letterSpacing:"1px"}} htmlFor="precio">
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
          <span className="text-red-500 text-m font-medium">
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
          <span className="text-red-500 text-m font-medium">
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
          <span className="text-red-500 text-m font-medium">
            Campo requerido
          </span>
        )}
        <button className="text-white border-2 font-primary text-2xl border-white w-52 m-auto bg-black rounded-md hover:bg-slate-800 transition-transform transform hover:scale-105">
          Modificar
        </button>
      </form>

      <button
        onClick={() => setUpdate(false)}
        className="bg-yellow-500 text-black m-5 p-2 w-36 text-xl rounded-lg transition-transform transform hover:scale-105 hover:bg-yellow-400 "
      >
        Volver
      </button>
    </div>
  );
}

export default UpdateProduct;
