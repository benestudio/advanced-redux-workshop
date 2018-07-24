import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Chat from './Chat/index';
import './App.css';
import configureStore from './store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Chat />
      </Provider>
    );
  }
}

export default App;
