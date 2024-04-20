import './TodoItem.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../Redux/actions';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ task }) => {
  // console.log(task);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task._id, task.status === 'active' ? 'completed' : 'active'));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  

  return (
    <div className="TodoItem" >
      <div className="TodoItem-title">
        <input type="checkbox" checked={task.status === 'completed'} onChange={handleToggle} />
        <span  style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none', fontSize: '20px', marginLeft: '10px' }}>{task.title}</span>
      </div>
      
      <button onClick={handleDelete}>  <FaTrash /></button>
      
    </div>
  );
};

export default TodoItem;
