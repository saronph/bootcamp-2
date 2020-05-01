import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * - UseState retorna um array com 2 posições
 * 1º Variável com o seu valor inicial
 * 2º Função para atualizarmos esse valor
 * 
 * - Sempre começar o estado com o tipo de info que irá receber
 * nesse caso array... ex: 'useState([])'
 */

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

   const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Saron Medeiros"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
  <>
    <Header title='Projects' />

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;