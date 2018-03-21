import React, { Component } from 'react';

import User from './components/User';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <main>
        <User />
        <Login />
      </main>
    );
  }
}

export default App;
