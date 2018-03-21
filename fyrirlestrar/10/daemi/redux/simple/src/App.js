import React, { Component } from 'react';

import User from './components/User';
import Profile from './components/Profile';

//
class Node extends Component {
  render() {
    const styles = {
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      padding: '50px',
      backgroundColor: 'rgba(216, 216, 216, 0.4)',
    }
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Node>
        <Profile />
        <User />
        <Node>
          <User />
        </Node>
        <Node>
          <Node><User /></Node>
        </Node>
        <Node>
          <Node>
            <Profile />
            <Node>
              <Node>
                <Node>
                  <User />
                </Node>
              </Node>
            </Node>
          </Node>
        </Node>
      </Node>
    );
  }
}

export default App;
