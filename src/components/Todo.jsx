import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  margin: 5px 0;
  padding: 5px;
  height: 20px;
  line-height: 20px;

  :hover{
    background-color: #aaa;
    color: #fff;
  }
`;

const Check = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Btn = styled.button`
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 10px;
  background-color: #f33;
  color: #fff;
  font-size: 12px;
  float: right;
`;

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = (e) => {
    const txt = e.target.value;
    toggleTodo(txt);
  };
  const handleDelete = (e) => {
    const txt = e.target.value;
    deleteTodo(txt);
  };
  return (
    <Li>
      <Check
        type="checkbox"
        value={todo.txt}
        checked={todo.completed ? 'checked' : ''}
        onChange={handleToggle}
      />
      {todo.txt}
      <Btn
        value={todo.txt}
        onClick={handleDelete}
      >
        -
      </Btn>
    </Li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    txt: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
