import React from "react";
import { Link } from "react-router-dom";

function MenuDefault(){
  return(
    <div>
      <nav>
        <Link className="btn btn-danger" to="menu-testes">Testes</Link>
        <Link className="btn btn-danger" to="menu-exercicios">Exercicios</Link>
        <Link className="btn btn-danger" to="menu-pokemon">Pokemon</Link>
      </nav>
    </div>
  );
}

export default MenuDefault;