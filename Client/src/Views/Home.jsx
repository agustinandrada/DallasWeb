import Bebidas from "../components/Bebidas"
import Comidas from "../components/Comidas"
function Home() {
  return (
  <div className="bg-opacity-60">
    <div className="bg-black bg-opacity-60 p-4 rounded-lg shadow-md mt-16">
      <Bebidas/>
    </div>
    <div className="bg-black bg-opacity-60 p-4 rounded-lg shadow-md mt-16">
      <Comidas/>
    </div>
    
  </div>)
}

export default Home;
