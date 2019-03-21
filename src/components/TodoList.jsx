import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from './Todo';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const UTitle = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const Ul = styled.ul`
  margin: 10px 0;
  padding: 0 10px;
  list-style: none;
`;

const TodoList = ({
  title, todos, toggleTodo, deleteTodo,
}) => (
  <Wrapper>
    <UTitle>{ title }</UTitle>
    <Ul>
      {todos.map(t => (
        <Todo key={t.txt} todo={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </Ul>
  </Wrapper>
);

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
