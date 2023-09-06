import logo from "../assets/logo.png";

function Home() {
  return (
    
    <div className="container mx-auto">
      <div className="flex flex-row items-center justify-between text-center">
        <div className="ml-4 max-w-[150px] mt-3 invert-colors ">
          <a href="/">
            <img src={logo} alt="logo" className="w-full h-full rounded-full" />
          </a>
        </div>
        <a href="https://wa.me/5493425506898" target="_blank" rel="noreferrer">
          <button className="mr-4 text-xl text-yellow-400 font-bold font-tertiary hover:text-white">RESERVAS</button>
        </a>
      </div>
    </div>

  );
}

export default Home;
