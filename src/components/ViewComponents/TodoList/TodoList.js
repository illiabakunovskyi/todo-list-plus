import React, { useState } from 'react';
import TodoListElement from './TodoListElement/TodoListElement';
import './styles.css';

// Dragable features
const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  originalOrder: [],
  updatedOrder: [],
};

const TodoList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState('');
  const [changing, setChanging] = useState(-1);
  const [taskInput, setTaskInput] = useState('');
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

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
        ...tasks.slice(key + 1),
      ]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') changeTaskName(changing, 'save');
  };

  const deleteTask = (name) => () => {
    console.log(name);
    setTasks(tasks.filter((task) => task.name !== name));
  };

  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder: tasks,
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setTasks(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder={'Enter name of task...'}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTask}>{'Add task'}</button>
      <div className="tasks_wrapper">
        {tasks.map((item, key) => {
          return (
            <TodoListElement
              item={item}
              key={key}
              keyValue={key}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              changing={changing}
              taskInput={taskInput}
              setTaskInput={setTaskInput}
              handleKeyDown={handleKeyDown}
              changeTaskName={changeTaskName}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
