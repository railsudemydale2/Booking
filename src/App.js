// import those pages in App.js
// then based on the path show each components using react-router compomnents.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import { Link } from 'react-router-dom';

/**
 * Let's create TopNavigation/mmenu bar so that we can easily TopNavigate between pages
 * Let's write it in App.js before we move it to its own compoenent.
 */

const TopNav = () => (
  <div className="nav bg-light d-flex justify-content-between">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/register">
      Register
    </Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {TopNav()}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
