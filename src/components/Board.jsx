import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from './List';

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Board = ({ todos, updateTodo, deleteTodo }) => (
  <Wrapper>
    <List
      title="Unfinished"
      data={todos.filter(t => !t.completed)}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
    <List
      title="Completed"
      data={todos.filter(t => t.completed)}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  </Wrapper>
);

Board.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Board;
