import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center justify-between text-center">
        <div className="max-w-[150px] bg-gray-400 bg-opacity-30 rounded-full">
          <a href="/">
          <img src={logo} alt="logo" className="w-full h-full rounded-full hover:" />
          </a>
        </div>
        <a href="https://wa.me/5493425506898" target="_blank" rel="noreferrer">
          <button className="btn bt-lg mr-4 text-xl text-black font-primary font-semibold">Reservas</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
