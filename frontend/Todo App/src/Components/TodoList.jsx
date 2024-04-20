// components/TodoList.js

import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
