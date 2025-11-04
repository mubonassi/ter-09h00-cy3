import React from "react";
import { Outlet, Link } from "react-router-dom";

function MenuTestes(){
  return(
    <div>
      <nav>
        <Link className="btn btn-warning" to="teste1">Teste 1</Link>
        <Link className="btn btn-warning" to="teste2">Teste 2</Link>
        <Link className="btn btn-warning" to="teste3">Teste 3</Link>
        <Link className="btn btn-warning" to="teste4">Teste 4</Link>
        <Link className="btn btn-warning" to="teste5">Teste 5</Link>
        <Link className="btn btn-warning" to="teste6">Teste 6</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default MenuTestes;