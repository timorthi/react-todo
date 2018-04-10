import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import TodoList from './TodoList';

import reducers from '../redux';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

