import React, { Component } from 'react';

import Notes from './components/Notes';
import AddNote from './components/AddNote';

class App extends Component {
  render() {
    return (
      <main>
        <Notes />
        <AddNote />
      </main>
    );
  }
}

export default App;
