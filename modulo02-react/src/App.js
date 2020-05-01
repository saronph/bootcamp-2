import React, {useState} from 'react';

import backgroundImage from './assets/spot4.jpg';
import './App.css';

import Header from './components/Header';

/**
 * - UseState retorna um array com 2 posições
 * 1º Variável com o seu valor inicial
 * 2º Função para atualizarmos esse valor
 */

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento', 'Produção']);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
  <>
    <Header title='Projects' />

    <img src={backgroundImage} alt="background"/>

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;