import React from 'react';
import styled from 'styled-components';

import HeadContainer from '../container/HeadContainer';
import TodoListContainer from '../container/TodoListContainer';
import Bottom from './Bottom';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-size: 14px;
  font-family: 'Microsoft Yahei';
`;

const App = () => (
  <Container>
    <HeadContainer />
    <TodoListContainer />
    <Bottom />
  </Container>
);

export default App;
