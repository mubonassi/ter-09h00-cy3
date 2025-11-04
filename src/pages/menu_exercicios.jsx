import React from "react";
import { Outlet, Link } from "react-router-dom";

function MenuExercicios(){
  return(
    <div>
      <nav>
        <Link className="btn btn-warning" to="ex1">Exercicio 1</Link>
        <Link className="btn btn-warning" to="ex2">Exercicio 2</Link>
        <Link className="btn btn-warning" to="ex3">Exercicio 3</Link>
        <Link className="btn btn-danger" to="clicker">Ghost Clicker</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default MenuExercicios;