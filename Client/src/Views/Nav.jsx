import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center justify-between text-center">
        <img src={logo} alt="logo" className="max-w-[150px]" />
        <a  href="https://wa.me/5493425506898" target="_blank" rel="noreferrer">
          <h1 className="mr-4 text-xl">Reservas</h1>
        </a>
      </div>
    </div>
  );
}

export default Home;
