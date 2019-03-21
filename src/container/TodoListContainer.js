import { connect } from 'react-redux';

import Board from '../components/Board';
import { deleteTodo, toggleTodo } from '../actions/todos';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: (txt) => {
    dispatch(deleteTodo(txt));
  },
  toggleTodo: (txt) => {
    dispatch(toggleTodo(txt));
  },
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default TodoListContainer;
