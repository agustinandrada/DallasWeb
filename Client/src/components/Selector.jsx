import React from "react";
import { Link } from "react-scroll";

const Selector = () => {
  return (
    <nav>
      <div className="flex flex-row container mx-auto border-b-2 mt-10 overflow-x-auto pl-14 pr-5 pb-3">
        <div className="flex items-center justify-center text-center space-x-8 uppercase text-2xl text-yellow-400 font-secondary font-semibold">
          
          <Link
            to="Cervezas"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer"
          >
          <p>Cervezas</p>
          </Link>
          <Link
            to="Tragos"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
            <p>Tragos</p>
          </Link>
          <Link
            to="Vinos"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
          <p>Vinos</p>
          </Link>
          <Link
            to="Aperitivos"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
          <p>Aperitivos</p>
          </Link>
          <Link
            to="Picadas"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
          <p>Picadas</p>
          </Link>

          <Link
            to="Papas"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
            <p>Papas</p>
          </Link>

          <Link
            to="Pizzas"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
            <p>Pizzas</p>
          </Link>

          <Link
            to="Hamburguesas"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
            <p>Hamburguesas</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Selector;
