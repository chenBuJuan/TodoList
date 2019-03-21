import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todos';

export default function todos(state = [], actions) {
  switch (actions.type) {
    case ADD_TODO:
      return [
        ...state,
        actions.payload,
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.txt !== actions.payload.txt);
    case TOGGLE_TODO:
      return state.map(todo => (todo.txt === actions.payload.txt
        ? { ...todo, completed: !todo.completed }
        : todo));
    default:
      return state;
  }
}
