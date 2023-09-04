import BebidasAdmin from "./BebidasAdmin";
import ComidasAdmin from "./ComidasAdmin";
function Productos() {
  return (
    <div className="bg-opacity-60 ">
      <div className="mx-5 ">
        <BebidasAdmin />
      </div>
      <div className="mx-5">
        <ComidasAdmin />
      </div>
    </div>
  );
}

export default Productos;
