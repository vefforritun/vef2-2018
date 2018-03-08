import React, { Component } from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function LoginButton(props) {
  return <button>Login</button>;
}

function LogoutButton(props) {
  return <button>Logout</button>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoggedIn(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

class Login extends React.Component {
  render() {
    let button;
    if (this.props.isLoggedIn) {
      button = <LogoutButton />;
    } else {
      button = <LoginButton />;
    }

    return (
      <div>
        <Greeting isLoggedIn={this.props.isLoggedIn} />
        {button}
      </div>
    )
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

class App extends Component {
  render() {
    const isLoggedIn = false;
    const messages = ['foo', 'bar'];
    return (
      <div>
        <LoggedIn isLoggedIn={isLoggedIn} />
        <Login isLoggedIn={isLoggedIn} />
        {isLoggedIn && (
          <Mailbox unreadMessages={messages} />
        )}
      </div>
    );
  }
}

export default App;
