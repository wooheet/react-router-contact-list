import React from "react";
import { Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => (
  <h3>Welcome to the best contact app in the world. ever. always</h3>
);

const Contacts = ({ match }) => (
  <ul>
    <li>
      <Link to={`${match.path}/lynn`}>Lynn</Link>
    </li>
    <li>
      <Link to={`${match.path}/japan-guy`}>Japan Guy</Link>
    </li>
    <li>
      <Link to={`${match.path}/jisu-kimchi`}>Jisu Kimchi</Link>
    </li>
    <li>
      <Link to={`${match.path}/juan-malakas`}>Juan Malakas</Link>
    </li>

    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a contact</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </ul>
);

const Contact = ({ match }) => (
  <h3>Your contact name is: {match.params.contactName}</h3>
);

export default App;