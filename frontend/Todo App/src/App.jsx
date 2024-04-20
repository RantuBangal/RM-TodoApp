import { useEffect } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import { useDispatch } from 'react-redux';
import { fetchTasks } from './Redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
    </>
  )
}

export default App
