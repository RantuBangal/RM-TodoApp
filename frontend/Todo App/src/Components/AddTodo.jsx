

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';


const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addTask(title));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
