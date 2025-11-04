import React from "react";
import { useState } from "react";

function Teste5() {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h2>Contador personalizado</h2>
      <h3>Contador: {contador}</h3>
      <label>Adicionar Número</label><br/>
      <input type="number" onChange={(e) => setNumero(Number(e.target.value))}/>
      <button onClick={() => setContador(contador + numero)}>Adicionar</button>

      {contador >= 1000 && <p>CHEGOU/PASSOU DE 1000!</p>}
      {contador >= 2000 && <p>CHEGOU/PASSOU DE 2000!</p>}
    </div>
  );
}

export default Teste5;
