import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Foo(props) {
  const { title, type, user, onClick } = props;

  return (
    <div className="foo">
      <h1>{title}</h1>
      <p>Ég er {type}</p>

      <p>Notandi:</p>
      <ul>
        <li>Nafn: {user.name}</li>
        <li>Aldur: {user.age}</li>
      </ul>
    </div>
  )
}

Foo.propTypes = {
  title: PropTypes.isRequired,
  type: PropTypes.oneOf(['foo', 'bar']),
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  onClick: PropTypes.func,
}

Foo.defaultProps = {
  type: 'foo',
  user: null,
  onClick: () => {},
}

class Bar extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'NN',
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const user = { name: 'Óli', age: '??' };

    return (
      <div>
        <Foo
          title="Halló!"
          user={user}
        />
        <Bar />
      </div>
    );
  }
}

export default App;
