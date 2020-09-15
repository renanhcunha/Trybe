import React from 'react';
import './App.css';

const taskList = ['Estudar Bloco 11', 'Fazer o projeto', 'Fazer exercícios físicos', 'Limpar a casa'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const createListItems = () => taskList.map(taskItem => task(taskItem));

function App() {
  return (createListItems());
}

export default App;
