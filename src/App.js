import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import LoginPage from './pages/login';
import AuthenticatedPage from './pages/authenticated';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to='/login' exact/>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/authenticated" component={AuthenticatedPage} />
        <Redirect to='/' exact />
      </Switch>
    </Router>
  );
}

export default App
