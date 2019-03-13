import React, { Component } from 'react';
import styled from 'styled-components';

import Head from './Head';
import Board from './Board';
import Bottom from './Bottom';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-size: 14px;
  font-family: 'Microsoft Yahei';
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { completed: false, txt: 'redux练习' },
        { completed: false, txt: '页面重构' },
        { completed: true, txt: 'webpack配置' },
        { completed: true, txt: 'babel配置' },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(e) {
    if (e.key === 'Enter') {
      const { todos } = this.state;
      const todo = e.target.value;
      let re = true;
      for (const t of todos) {
        if (t.txt === todo) re = false;
      }
      if (re) {
        this.setState({
          todos: [...todos, { completed: false, txt: todo }],
        });
      }
      e.target.value = '';
    }
  }

  updateTodo(e) {
    const { todos } = this.state;
    const todo = e.target.value;
    for (const t of todos) {
      if (t.txt === todo) {
        t.completed = !t.completed;
      }
    }
    this.setState({ todos });
  }

  deleteTodo(e) {
    let { todos } = this.state;
    const todo = e.target.value;
    todos = todos.filter(t => t.txt !== todo);
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <Container>
        <Head addTodo={this.addTodo} />
        <Board
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Bottom />
      </Container>
    );
  }
}

export default Main;
