import React from "react";
import { useState, useEffect } from "react";

function Teste6() {

  const [contador,setContador] = useState(0)

  useEffect(
    () => {
      alert('Effect inicial funcionou!');
    },[]
  );
  useEffect(
    () => {
      console.log(`Contador mudou! Agora está: ${contador}`);
      document.title = `Contador: ${contador}`
      localStorage.setItem("contador",contador);
      if (contador >= 100){
        alert('Chegou no 100! Resetando...');
        setContador(0);
      }

    },[contador]
  );

  return (
    <div>
      <h2>Teste de useEffect</h2>
      <h3>{contador}</h3>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

export default Teste6;