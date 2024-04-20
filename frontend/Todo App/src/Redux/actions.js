import axios from 'axios';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const API_BASE_URL = 'https://rm-todoapp.onrender.com/tasks';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = error => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksRequest());
    axios.get(API_BASE_URL)
      .then(response => {
        const tasks = response.data;
        console.log(tasks);
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchTasksFailure(errorMsg));
      });
  };
};

export const addTask = title => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/add`, { title })
      .then(response => {
        const task = response.data;
        console.log(task);
        dispatch({
          type: ADD_TASK,
          payload: task,
        });
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  };
};

export const toggleTask = (id, status) => {
  return dispatch => {
    axios.patch(`${API_BASE_URL}/update/${id}`, { status: status })
      .then(response => {
        const updatedTask = response.data;
        console.log(updatedTask.updatedTask);
        dispatch({
          type: TOGGLE_TASK,
          payload: updatedTask.updatedTask,
        });
      })
      .catch(error => {
        console.error('Error toggling task:', error);
      });
  };
};

export const deleteTask = id => {
  return dispatch => {
    axios.delete(`${API_BASE_URL}/delete/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_TASK,
          payload: id,
        });
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };
}
