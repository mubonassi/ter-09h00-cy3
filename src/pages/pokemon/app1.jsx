import React, { useEffect, useState } from 'react';

function P_App1(){
  const [id, setId] = useState(0);
  const [nome,setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [peso, setPeso] = useState(0);

  const [atks, setAtks] = useState(["","","",""]);
  const [sprite,setSprite] = useState(["",""]);
  const [cry, setCry] = useState("");

  const tocarSom = () => {
    const audio = new Audio(cry);
    audio.volume = 0.5;
    audio.play();
  }

  useEffect(()=>{
    const api = 'https://pokeapi.co/api/v2/pokemon/151';

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setNome(data.name);
        setTipo(data.types[0].type.name);
        setSubtipo(data.types[1]?.type.name || "Nenhum");
        setPeso(data.weight / 10);
        setCry(data.cries.latest);

        setAtks([
          data.moves[0].move.name,
          data.moves[1].move.name,
          data.moves[2].move.name,
          data.moves[3].move.name
        ]);

        setSprite([
          data.sprites.front_default,
          data.sprites.front_shiny
        ]);
      })
  },[]);
  
  return(
    <div className="container mt-4">
      <h1 className="text-center text-white mb-4">Pokedex (V1)</h1>
      
      <ul className="list-group mt-3">
        <li className="list-group-item text-center">
          <h2 className="text-danger text-capitalize mb-3">{nome}</h2>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <img src={sprite[0]} alt="Normal" height="140px" />
            <img src={sprite[1]} alt="Shiny" height="140px" />
          </div>
          <button 
            onClick={tocarSom} 
            className="btn btn-danger btn-sm">
            🔊 Tocar 'Grito'
          </button>
        </li>
        <li className="list-group-item"><strong>ID:</strong> {id}</li>
        <li className="list-group-item text-capitalize"><strong>Nome:</strong> {nome}</li>
        <li className="list-group-item text-capitalize">
          <strong>Tipo:</strong> <span className="badge bg-primary">{tipo}</span>
          <span className="badge bg-secondary ms-2">{subtipo}</span>
        </li>
        <li className="list-group-item"><strong>Peso:</strong> {peso} kg</li>
        <hr/>
        <li className="list-group-item text-capitalize"><strong>Move [1]:</strong> {atks[0]}</li>
        <li className="list-group-item text-capitalize"><strong>Move [2]:</strong> {atks[1]}</li>
        <li className="list-group-item text-capitalize"><strong>Move [3]:</strong> {atks[2]}</li>
        <li className="list-group-item text-capitalize"><strong>Move [4]:</strong> {atks[3]}</li>
      </ul>

      <hr className="border-danger mt-4"/>
    </div>
  )
}

export default P_App1;
