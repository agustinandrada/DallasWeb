import Bebidas from '../components/Bebidas';
import Comidas from '../components/Comidas';
import Selector from '../components/Selector';


function Home() {

  return (
    <div>
         <div className="bg-opacity-60">
          <div className="sticky top-0">
            <Selector />
          </div>
          <div className="mx-5">
            <Bebidas />
          </div>
          <div className="mx-5">
            <Comidas />
          </div>
        </div>
    </div>
  );
}

export default Home;

