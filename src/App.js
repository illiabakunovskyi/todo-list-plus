import React from 'react';
import './App.css';
import TodoList from './components/ViewComponents/TodoList/TodoList';

const initialTasks = [
  { name: 'large-large-text-too-large' },
  { name: '2' },
  { name: '4' },
];

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: 'IBM Plex Sans, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {'Simple todo list with drag and drop'}
      </h1>
      <TodoList initialTasks={initialTasks} />
    </div>
  );
}

export default App;
