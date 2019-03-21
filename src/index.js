import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/root';

import App from './components/App';
import 'normalize.css';

const initialState = {
  todos: [
    { txt: '未完成', completed: false },
    { txt: '已完成', completed: true },
  ],
};

const store = createStore(reducer, initialState);

/*
store.subscribe(() => {
  console.log(store.getState());
});
*/

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
