import React, { Component } from 'react';
import withFetch from './withFetch';

class Currency extends Component {

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
        <h2>Gengi</h2>
        {data.results.map((item, i) => (
          <li key={i}>{item.longName} = {item.value}</li>
        ))}
      </section>
    );
  }
}

export default withFetch(Currency, 'http://apis.is/currency/arion');
