import React from 'react';

class User extends React.Component {

  render() {
    // fáum route props frá <Route>
    const { match } = this.props;
    const user = match.params.user;

    return (
      <div>
        <h1>Notendasíða fyrir {user}</h1>
      </div>
    )
  }
}

export default User;
