import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';
import './AddTodo.css';


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
    <form className="AddTodoForm" onSubmit={handleSubmit}>
      <input className="AddTodoInput" type="text" value={title} onChange={handleChange} placeholder="Create a new todo..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
