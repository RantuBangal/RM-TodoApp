
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useState } from 'react';

const TodoList = () => {
  const { completed, setCompleted } = useState([]);
  const { active, setActive } = useState([]);
  const tasks = useSelector(state => state.tasks);
  // console.log(tasks.tasks.length);

  // setLength(tasks.tasks.length);

  const fetchCompleted = () => {
    const completedTasks = tasks.tasks.filter(task => task.status === 'completed');
    setCompleted(completedTasks);
    console.log(completedTasks);
  }

  const fetchActive = () => {
    const activeTasks = tasks.tasks.filter(task => task.status === 'active');
    setActive(activeTasks);
    console.log(activeTasks);
  }

 


  return (
      <div className='TodoList' >
        {tasks.tasks?.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '80%' }} >
            {/* <p>{tasks.tasks.length} items left</p> */}
            <p onClick={fetchCompleted}>Completed</p>
            <p onClick={fetchActive}>Active</p>
            <p>Clear Completed</p>
        </div>
      </div>
  );
};

export default TodoList;
