import React, { Component } from 'react';

import Fetch from './Fetch';
import Currency from './Currency';
import Earthquakes from './Earthquakes';

class App extends Component {
  render() {
    return (
      <div>
        <Currency />
        <Earthquakes />
        {/*<Fetch url="http://apis.is/currency/arion" />
        <Fetch url="http://apis.is/earthquake/is" />*/}
      </div>
    );
  }
}

export default App;
