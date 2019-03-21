export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = txt => ({
  type: ADD_TODO,
  payload: {
    txt,
    completed: false,
  },
});

export const deleteTodo = txt => ({
  type: DELETE_TODO,
  payload: {
    txt,
  },
});

export const toggleTodo = txt => ({
  type: TOGGLE_TODO,
  payload: {
    txt,
  },
});
