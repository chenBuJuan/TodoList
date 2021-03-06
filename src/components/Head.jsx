import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  height: 45px;
  line-height: 45px;
  background-color: #222;
  color: #fff;
`;

const HWrapper = styled.div`
  height: 100%;
  width: 30%;
  float: left;
  margin-left: 20px;
`;

const H1 = styled.h1`
  display: inline-block;
  font-size: 24px;
  margin: 0;
`;

const InputWrapper = styled.div`
  height: 100%;
  width: 50%;
  float: right;
  text-align: center;
`;

const Input = styled.input`
  height: 24px;
  width: 60%;
  font-size: 14px;
  border: 0;
  outline: 0;
  padding: 0 0 0 5px;
  border-radius: 3px;

  transition: width 0.3s ease-in-out 0s;

  :focus{
    width: 80%;
  }
`;

const Head = ({ todos, addTodo }) => {
  let input;

  const handleKeyUp = (e) => {
    if (e.key !== 'Enter') return;
    let re = true;
    const txt = input.value;
    for (const todo of todos) if (todo.txt === txt) re = false;
    if (re) {
      addTodo(txt);
      input.value = '';
    }
  };

  return (
    <Header>
      <HWrapper>
        <H1>Todolist</H1>
      </HWrapper>
      <InputWrapper>
        <Input
          ref={(node) => {
            input = node;
          }}
          type="text"
          autoFocus="autoFocus"
          placeholder="input things"
          onKeyUp={handleKeyUp}
        />
      </InputWrapper>
    </Header>
  );
};


Head.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default Head;
