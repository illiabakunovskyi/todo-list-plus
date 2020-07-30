import React from 'react';
import './styles.css';

const TodoListElement = (props) => {
  const {
    item,
    keyValue,
    onDragStart,
    onDragOver,
    onDrop,
    changing,
    taskInput,
    setTaskInput,
    handleKeyDown,
    changeTaskName,
    deleteTask,
  } = props;

  return (
    <div
      className="task"
      data-position={keyValue}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      key={keyValue}
    >
      {changing === keyValue ? (
        <input
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        />
      ) : (
        <label>
          {item.name.length >= 20 ? item.name.slice(0, 17) + '...' : item.name}
        </label>
      )}
      {changing !== keyValue && (
        <button onClick={changeTaskName(keyValue)}>{'change name'}</button>
      )}
      {changing === keyValue && (
        <button onClick={changeTaskName(keyValue, 'save')}>{'save'}</button>
      )}
      {changing === keyValue && (
        <button onClick={changeTaskName(keyValue)}>{'discard'}</button>
      )}
      <button onClick={deleteTask(item.name)}>{'delete'}</button>
    </div>
  );
};

export default TodoListElement;
