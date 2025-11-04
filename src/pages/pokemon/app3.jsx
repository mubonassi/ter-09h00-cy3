import React, { use, useEffect, useState } from 'react';

function P_App3() {
  class Pokemon {
    constructor(id, nome, tipos, peso, atks, sprites, cry) {
      this.id = id;
      this.nome = nome;
      this.tipos = tipos;
      this.peso = peso;
      this.atks = atks;
      this.sprites = sprites;
      this.cry = cry;
    }
    tocarSom() {
      const audio = new Audio(this.cry);
      audio.volume = 0.5;
      audio.play();
    }
  }
  const [idPesquisa,setIdPesquisa] = useState(0);
  const [idGerada, setIdGerada] = useState(0);
  const [pokemon, setPokemon] = useState(
    new Pokemon(0, '', ['', ''], '', ['', '', '', ''], ['', ''], '')
  );

  const gerarPokemon = () => {
    let id = Math.floor(Math.random() * 1025) + 1;
    setIdGerada(id);
  };

  const pesquisarPokemon = () => {
    let id = Math.floor(idPesquisa);
    setIdGerada(id);
  }

  useEffect(()=>{
    gerarPokemon();
  },[]);

  useEffect(() => {
    const api = `https://pokeapi.co/api/v2/pokemon/${idGerada}`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        const tipos = [
          data.types[0].type.name,
          data.types[1]?.type.name || 'Nenhum',
        ];
        const atks = [
          data.moves[0].move.name,
          data.moves[1].move.name,
          data.moves[2].move.name,
          data.moves[3].move.name,
        ];
        const sprs = [data.sprites.front_default, data.sprites.front_shiny];

        setPokemon(
          new Pokemon(
            data.id,
            data.name,
            tipos,
            data.weight / 10,
            atks,
            sprs,
            data.cries.latest
          )
        );
      });
  }, [idGerada]);

  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1 className="text-white mb-4">Pokedex (V2)</h1>
        <input type="number" placeholder="ID do Pokémon" onChange={(e) => setIdPesquisa(Number(e.target.value))}/><br/>
        <button onClick={pesquisarPokemon} className="btn btn-danger btn-sm">🔎 Consultar Pokémon</button>
        <button onClick={gerarPokemon} className="btn btn-danger btn-sm">♻️ Gerar Pokémon</button>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item text-center">
          <h2 className="text-danger text-capitalize mb-3">{pokemon.nome}</h2>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <img src={pokemon.sprites[0]} alt="Normal" height="140px" />
            <img src={pokemon.sprites[1]} alt="Shiny" height="140px" />
          </div>

          <button
            onClick={() => pokemon.tocarSom()}
            className="btn btn-danger btn-sm"
          >
            🔊 Tocar 'Grito'
          </button>
        </li>
        <li className="list-group-item">
          <strong>ID:</strong> {pokemon.id}
        </li>
        <li className="list-group-item text-capitalize">
          <strong>Nome:</strong> {pokemon.nome}
        </li>
        <li className="list-group-item text-capitalize">
          <strong>Tipo:</strong>{' '}
          <span className="badge bg-primary">{pokemon.tipos[0]}</span>
          <span className="badge bg-secondary ms-2">{pokemon.tipos[1]}</span>
        </li>
        <li className="list-group-item">
          <strong>Peso:</strong> {pokemon.peso} kg
        </li>
        <hr />
        <li className="list-group-item text-capitalize">
          <strong>Move [1]:</strong> {pokemon.atks[0]}
        </li>
        <li className="list-group-item text-capitalize">
          <strong>Move [2]:</strong> {pokemon.atks[1]}
        </li>
        <li className="list-group-item text-capitalize">
          <strong>Move [3]:</strong> {pokemon.atks[2]}
        </li>
        <li className="list-group-item text-capitalize">
          <strong>Move [4]:</strong> {pokemon.atks[3]}
        </li>
      </ul>

      <hr className="border-danger mt-4" />
    </div>
  );
}

export default P_App3;
