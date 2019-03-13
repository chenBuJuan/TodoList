import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const List = ({
  title, data, updateTodo, deleteTodo,
}) => (
  <Wrapper>
    <UTitle>{ title }</UTitle>
    <Ul>
      {data.map(t => (
        <Li key={t.txt}>
          <Check
            type="checkbox"
            value={t.txt}
            checked={t.completed ? 'checked' : ''}
            onChange={updateTodo}
          />
          {t.txt}
          <Btn
            onClick={deleteTodo}
            value={t.txt}
          >
            -
          </Btn>
        </Li>
      ))}
    </Ul>
  </Wrapper>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default List;
