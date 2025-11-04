import React from 'react';
import { useState } from 'react';

function Teste4(){
  
  const [numero,setNumero] = useState(0);
  const [contador,setContador] = useState(0);
  const [imagem,setImagem] = useState('https://cloudfront-us-east-1.images.arcpublishing.com/estadao/GEUVV5EDH5FUVEQJ6YYTV3JERA.jpeg');

  return(
    <div>
      <h2>Usando o useState</h2>
      <p>Numero: {numero}</p>
      <button onClick={() => setNumero(10)}>Mudar para 10</button>
      <h3>Contador</h3>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador+1)}>+</button>
      <button>-</button>
      <button>C</button>
      <h3>State de Imagem</h3>
      <img src={imagem} alt="" width="25%"/><br/>
      <button onClick={() => setImagem('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJp2RWjukU24aqWrQy7IktM8k4cU9peCsUnw&s')}>Mudar imagem</button>
    </div>
  );
}

export default Teste4;