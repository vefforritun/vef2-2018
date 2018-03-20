import React from 'react';

export default function withFetch(WrappedComponent, url) {

  return class extends React.Component {
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
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    render() {
      const { data, loading, error } = this.state;

      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
}
