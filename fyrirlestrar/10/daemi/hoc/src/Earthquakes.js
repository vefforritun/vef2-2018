import React, { Component } from 'react';
import withFetch from './withFetch';

class Earthquakes extends Component {

  render() {
    const { data, loading, error } = this.props;

    if (loading) {
      return (<div>Sæki gengi...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gengi</div>);
    }

    return (
      <section>
        <h2>Jarðskjálftar</h2>
        {data.results.map((item, i) => (
          <li key={i}>{item.size}, {item.humanReadableLocation}</li>
        ))}
      </section>
    );
  }
}

export default withFetch(Earthquakes, 'http://apis.is/earthquake/is');
