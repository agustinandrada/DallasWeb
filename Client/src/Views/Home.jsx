import Bebidas from "../components/Bebidas"
import Comidas from "../components/Comidas"
import Selector from "../components/Selector";
function Home() {
  return (
  <div className="bg-opacity-60">
    <div>
      <Selector/>
    </div>
    <div className="mx-5">
      <Bebidas/>
    </div>
    <div className="mx-5">
      <Comidas/>
    </div>
    
  </div>)
}

export default Home;
