// import those pages in App.js
// then based on the path show each components using react-router compomnents.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';

/**
 * Let's create TopNavigation/mmenu bar so that we can easily TopNavigate between pages
 * Let's write it in App.js before we move it to its own compoenent.
 */

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
