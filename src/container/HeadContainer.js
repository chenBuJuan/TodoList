import { connect } from 'react-redux';

import Head from '../components/Head';
import { addTodo } from '../actions/todos';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (txt) => {
    dispatch(addTodo(txt));
  },
});

const HeadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);

export default HeadContainer;
