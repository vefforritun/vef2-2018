import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import User from './User';
import NotFound from './NotFound';

class App extends Component {
  render() {
    const users = [
      { name: 'Jón', slug: 'jon' },
      { name: 'Gunna', slug: 'gunna' },
    ];

    return (
      <main>

        <nav>
          <ul>
            <li><NavLink to="/">Heim</NavLink></li>
            <li><NavLink to="/about">Um</NavLink></li>
            {users.map((user) => (
              <li key={user.slug}>
                <NavLink to={`/users/${user.slug}`}>{user.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route path="/users/:user" component={User} />
            <Route component={NotFound} />
          </Switch>
        </section>

        <p><NavLink to="/">Heim</NavLink></p>

      </main>
    );
  }
}

export default App;
