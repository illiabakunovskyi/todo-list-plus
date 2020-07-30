import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'large-large-text-too-large' },
    { name: '2' },
    { name: '4' },
  ]);
  const [input, setInput] = useState('');
  const [changing, setChanging] = useState(-1);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    setTasks([...tasks, { name: input }]);
  };

  const changeTaskName = (key, flag) => () => {
    setChanging(changing === -1 ? key : -1);
    setTaskInput(tasks[key].name);
    if (flag === 'save')
      setTasks([
        ...tasks.slice(0, key),
        { name: taskInput },
        ...tasks.slice(key + 1, tasks.length),
      ]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter')
      changeTaskName(changing, 'save');
  };

  const deleteTask = (name) => () => {
    console.log(name);
    setTasks(tasks.filter((task) => task.name !== name));
  };

  return (
    <div className="App">
      <h1
        style={{
          fontFamily: 'IBM Plex Sans, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {'Simple todo list with drag and drop'}
      </h1>
      <input
        type="text"
        placeholder={'Enter name of task...'}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTask}>{'Add task'}</button>
      <div
        className="droptarget"
        style={{
          backgroundColor: '#e5eff7',
          width: '350px',
          margin: '5px auto',
          padding: '25px',
          borderRadius: '3px',
          boxSizing: 'border-box',
        }}
      >
        {tasks.map((item, key) => {
          return (
            <div
              style={{
                backgroundColor: '#249369',
                width: '300px',
                marginBottom: '5px',
                borderRadius: '3px',
                color: '#f5f9fc',
                padding: '3px 0',
              }}
              key={key}
            >
              {changing === key ? (
                <input
                  value={taskInput}
                  onChange={(event) => setTaskInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  type="text"
                />
              ) : (
                <label>
                  {item.name.length >= 20
                    ? item.name.slice(0, 17) + '...'
                    : item.name}
                </label>
              )}
              {changing !== key && (
                <button onClick={changeTaskName(key)}>{'change name'}</button>
              )}
              {changing === key && (
                <button onClick={changeTaskName(key, 'save')}>{'save'}</button>
              )}
              {changing === key && (
                <button onClick={changeTaskName(key)}>{'discard'}</button>
              )}
              <button onClick={deleteTask(item.name)}>{'delete'}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
