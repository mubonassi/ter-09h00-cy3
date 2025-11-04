import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/header.jsx';
import MenuDefault from './pages/menu_default.jsx';
import MenuTestes from './pages/menu_testes.jsx';
import MenuExercicios from './pages/menu_exercicios.jsx';
import Teste1 from './pages/teste1.jsx';
import Teste2 from './pages/teste2.jsx';
import Teste3 from './pages/teste3.jsx';
import Teste4 from './pages/teste4.jsx';
import Teste5 from './pages/teste5.jsx';
import Teste6 from './pages/teste6.jsx';
import Ex1 from './pages/ex1.jsx';
import Ex3 from './pages/ex3.jsx';
import Clicker from './pages/clicker.jsx';

//Apps do Pokemon
import Pokemon from './pages/pokemon/menu_pokemon.jsx';
import P_Teste from './pages/pokemon/teste.jsx';
import P_App1 from './pages/pokemon/app1.jsx';
import P_App2 from './pages/pokemon/app2.jsx';
import P_App3 from './pages/pokemon/app3.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MenuDefault />
        <Routes>
          <Route path="/" element={<h2>Escolha a sua página</h2>} />

          <Route path="menu-testes" element={<MenuTestes />}>
            <Route path="teste1" element={<Teste1 />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3 />} />
            <Route path="teste4" element={<Teste4 />} />
            <Route path="teste5" element={<Teste5 />} />
            <Route path="teste6" element={<Teste6 />} />
            <Route path="*" element={<h2>ERRO: Teste não encontrado!</h2>} />
          </Route>

          <Route path="menu-exercicios" element={<MenuExercicios />}>
            <Route path="ex1" element={<Ex1 />} />
            <Route path="ex3" element={<Ex3 />} />
            <Route path="clicker" element={<Clicker />} />
            <Route
              path="*"
              element={<h2>ERRO: Exercicio não encontrado!</h2>}
            />
          </Route>

          <Route path="menu-pokemon" element={<Pokemon />}>
            <Route path="teste" element={<P_Teste/>}/>
            <Route path="app1" element={<P_App1/>}/>
            <Route path="app2" element={<P_App2/>}/>
            <Route path="app3" element={<P_App3/>}/>
            <Route path="*" element={<h2>ERRO! Aplicativo não encontrado!</h2>}/>
          </Route>

          <Route path="*" element={<h2>ERRO: Página não encontrada!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
