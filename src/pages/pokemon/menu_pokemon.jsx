import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Pokemon() {
  return (
    <div>
      <Link className="btn btn-warning" to="teste">Teste de API</Link>
      <Link className="btn btn-warning" to="app1">App 1</Link>
      <Link className="btn btn-warning" to="app2">App 2</Link>
      <Link className="btn btn-warning" to="app3">App 3</Link>

      <hr />
      <Outlet />
    </div>
  );
}

export default Pokemon;
