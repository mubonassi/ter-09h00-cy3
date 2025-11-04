import React, { useEffect, useState } from "react";

function Clicker() {
  const [contador, setContador] = useState(0);

  useEffect(
    () => {
      document.title = `👻: ${contador}`;
    },[contador]
  );

  return (
    <div>
      <h1>GhostClicker</h1>
      <h2>Fantasmas Invocados: {contador}</h2>
      <button
        onClick={() => setContador(contador + 1)}
        className="btn btn-outline-info p-0 border-0 bg-transparent"
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://em-content.zobj.net/source/animated-noto-color-emoji/427/ghost_1f47b.gif"
          alt="ghost"
          width="200"
          className="img-fluid"
        />
      </button>
      <p className="lead">👻 Conquistas Assustadoras! 👻</p>
      {contador >= 10 && <p>💨 Um sopro gelado na nuca... (10 cliques)</p>}
      {contador >= 50 && <p>🔮 O véu entre os mundos está afinando... (50 cliques)</p>}
      {contador >= 100 && <p>🪦 Espíritos inquietos despertaram... (100 cliques)</p>}
      {contador >= 150 && <p>🕯️ As velas começam a tremer... (150 cliques)</p>}
      {contador >= 200 && <p>🦇 Morcegos sobrevoam a escuridão... (200 cliques)</p>}
      {contador >= 300 && <p>⚰️ O caixão range... (300 cliques)</p>}
      {contador >= 400 && <p>🌙 A lua cheia brilha no cemitério... (400 cliques)</p>}
      {contador >= 500 && <p>🧟 Zumbis começam a rastejar... (500 cliques)</p>}
      {contador >= 600 && <p>🕷️ As teias cobrem os corredores... (600 cliques)</p>}
      {contador >= 700 && <p>🩸 Um frio arrepio na espinha... (700 cliques)</p>}
      {contador >= 800 && <p>👁️ Olhos brilham na escuridão... (800 cliques)</p>}
      {contador >= 900 && <p>💀☠️💀 O portal sombrio se abre... (900 cliques)</p>}
      {contador >= 1000 && <p>👻🏚️👻 INVASÃO FANTASMAL COMPLETA! (1000 cliques)</p>}
    </div>
  );
}

export default Clicker;
