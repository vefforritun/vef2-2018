import React, { Component } from 'react';

import Currency from './Currency';

export default class CurrencyContainer extends Component {
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const response = await fetch('http://apis.is/currency/arion');
    const data = await response.json();
    console.log(data)
    return data;
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Sæki gengi...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gengi</div>);
    }

    return (
      <Currency data={data.results} />
    );
  }
}
