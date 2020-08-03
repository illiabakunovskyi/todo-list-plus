import React from 'react';
import TodoList from './components/ViewComponents/TodoList/TodoList';
import './App.css';

const initialTasks = [
  { name: 'large-large-text-too-large' },
  { name: '2' },
  { name: '4' },
];

function App() {
  return (
    <div className="App">
      <h1 className="header">{'Simple todo list with drag and drop'}</h1>
      <TodoList initialTasks={initialTasks} />
    </div>
  );
}

export default App;
