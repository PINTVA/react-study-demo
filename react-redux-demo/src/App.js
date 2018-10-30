import React, { Component } from 'react';
import Header from './pages/header'
import Content from './pages/content'
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header></Header>
          <Content></Content>
        </div>
      </Provider>
    );
  }
}

export default App;
