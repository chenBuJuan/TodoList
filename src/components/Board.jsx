import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodoList from './TodoList';

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Board = ({ todos, toggleTodo, deleteTodo }) => (
  <Wrapper>
    <TodoList
      title="Unfinished"
      todos={todos.filter(t => !t.completed)}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
    <TodoList
      title="Completed"
      todos={todos.filter(t => t.completed)}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  </Wrapper>
);

Board.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Board;
