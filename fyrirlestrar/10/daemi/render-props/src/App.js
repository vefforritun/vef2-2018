import React, { Component } from 'react';

import Fetch from './Fetch';
import MouseTracker from './Mouse';

class App extends Component {
  render() {
    return (
      <div>
        <MouseTracker />
        <Fetch
          url="http://apis.is/currency/arion"
          render={({ loading, error, data}) => {
            if (loading) {
              return (<div>Sæki gengi...</div>);
            }

            if (error) {
              return (<div>Villa við að sækja gengi</div>);
            }

            return (
              <section>
                <h2>Gengi</h2>
                {data.results.map((item, i) => (
                  <li key={i}>{item.longName} = {item.value}</li>
                ))}
              </section>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
