import React from "react";

function Teste3(){
  let num1 = 0;
  let num2 = 0;
  let resultado = 0;

  const calcular = () => {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);;
    resultado = num1+num2;
    document.getElementById('resultado').textContent = `${num1} + ${num2} = ${resultado}`;
  };
  return(
    <div>
      <header>
        <h2>Calculadora</h2>
      </header>
      <section>
        <p>
          <label htmlFor="num1">Número 1</label><input type="text" id="num1"/><br/>
          <label htmlFor="num2">Número 2</label><input type="text" id="num2"/><br/>
          <button className="btn btn-success" onClick={calcular}>Calcular</button>
          <p id="resultado"/>
        </p>
      </section>
    </div>
  );
}

export default Teste3;