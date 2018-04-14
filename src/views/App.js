import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Container } from 'semantic-ui-react';

import './App.css';
import TodoList from './TodoList';

import reducers from '../redux';

let middlewares = [];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <TodoList />
        </Container>
      </Provider>
    );
  }
}

