import React from "react";

function Teste2(){
  
  const exibir_msg = () => alert('Função funcionando!');

  const mudar_texto = () => {
    const txt_elemento = document.getElementById('texto');
    let txt_conteudo = 'Texto mudado com sucesso';
    txt_elemento.textContent = txt_conteudo;
  }
  const mudar_textoV2 = () => {
    const txt_elemento = document.getElementById('texto');
    let txt_conteudo = prompt('Escreva o texto que deseja mudar');
    txt_elemento.textContent = txt_conteudo;
  }

  return(
    <div>
      <button onClick={() => alert('Botão de teste! WEEE!')}>Clique Aqui 1</button>
      <button onClick={exibir_msg}>Clique aqui 2</button>
      <button onClick={mudar_texto}>Clique aqui para mudar o texto</button>
      <button onClick={mudar_textoV2}>Clique aqui para selecionar um novo texto</button>
      <p id="texto">Esse texto será mudado</p>
    </div>
  );
}
export default Teste2;