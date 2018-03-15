import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Data extends Component {
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching navigation', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const response = await fetch('http://apis.is/cyclecounter');
    const data = await response.json();
    return data;
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <div>
          <p>Sæki gögn...</p>
          <Helmet title="Sæki gögn...">
            <style>{`body { background-color: lightblue; }`}</style>
          </Helmet>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>Villa við að sækja gögn</p>
          <Helmet title="Villa við að sækja gögn">
            <style>{`body { background-color: red; }`}</style>
          </Helmet>
        </div>
      );
    }

    const count = data.results[0].DayCount
    return (
      <div>
        <p>Hjól í dag: {count}</p>
        <Helmet title={`${count} hjól í dag`}>
          <style>{`body { background-color: lightgreen; }`}</style>
        </Helmet>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <main>
        <Helmet defaultTitle="Hjólagögn.is"" titleTemplate="%s – Hjólagögn.is">
          <html lang="is" />
          <body className="foo" />
        </Helmet>
        <Data />
      </main>
    );
  }
}

export default App;
