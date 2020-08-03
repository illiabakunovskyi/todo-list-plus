import React from 'react';
import './styles.css';
import IconButton from '../../../UIElements/Buttons/IconButton/IconButton';
import IconClose from '../../../../static/images/IconClose';
import IconEdit from '../../../../static/images/IconEdit';
import IconTrash from '../../../../static/images/IconTrash';
import IconSave from '../../../../static/images/IconSave';

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
      <div className="task_rigth">
        {changing !== keyValue && (
          <IconButton onClick={changeTaskName(keyValue)}>
            <IconEdit />
          </IconButton>
        )}
        {changing === keyValue && (
          <IconButton onClick={changeTaskName(keyValue, 'save')}>
            <IconSave />
          </IconButton>
        )}
        {changing === keyValue && (
          <IconButton onClick={changeTaskName(keyValue)}>
            <IconClose />
          </IconButton>
        )}
        <IconButton onClick={deleteTask(item.name)}>
          <IconTrash />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoListElement;
