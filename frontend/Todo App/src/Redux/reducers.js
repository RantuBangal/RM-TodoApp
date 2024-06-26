

import { ADD_TASK, DELETE_TASK, FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, TOGGLE_TASK } from "./actions";


  const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TASKS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_TASKS_SUCCESS:
        return {
          ...state,
          loading: false,
          tasks: action.payload,
        };
      case FETCH_TASKS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case TOGGLE_TASK:
        // console.log(action.payload);
        // console.log(state.tasks.tasks);
        // console.log(state);
        return {
          ...state,
          tasks: state.tasks.tasks.map(task =>
            task._id === action.payload._id ? action.payload : task
          ),
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  