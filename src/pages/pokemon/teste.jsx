import React from 'react';
import { useEffect, useState } from 'react';

function P_Teste(){
  const [nome,setNome] = useState("");


  useEffect(()=>{
    const api = 'https://pokeapi.co/api/v2/pokemon/1025';

    fetch(api)
    .then((res) => res.json())
    .then((data) => setNome(data.name))

  },[]);
  

  return(
    <div>
      <h1>Teste de API</h1>
      <h2>Pokémon: {nome}</h2>
    </div>
  )
}

export default P_Teste;