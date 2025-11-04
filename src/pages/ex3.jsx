import React from "react";
import { useState } from "react";

function Ex3() {
  
  const [imagem, setImagem] = useState('');
  
  return (
    <div>
      <h1>Escolha sua imagem secreta!</h1>
      <img src={imagem} alt=""/><br/>
      <button onClick={() => setImagem('https://media.tenor.com/TnCIDBDIH4wAAAAe/polar-bear-meme.png')}>Porta No1</button>
      <button onClick={() => setImagem('https://i.ytimg.com/vi/Z2ui9amwIwQ/hqdefault.jpg')}>Janela No2</button>
      <button onClick={() => setImagem('https://preview.redd.it/yjummeqqbyi31.jpg?width=640&crop=smart&auto=webp&s=d2afddf0792eadd7472169b504b5c6b0ed9a251b')}>Dimensão No3</button>
    </div>
  );
}

export default Ex3;
