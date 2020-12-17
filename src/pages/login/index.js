import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import * as config from '../../config';

import logo from '../../logo.svg';
import '../../App.css';

function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) return (<Redirect to={config.AUTHENTICATED_URL} />)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click authenticate below to begin the authentication process.
        </p>
        <button onClick={loginWithRedirect}>
          <h2>Authenticate</h2>
        </button>
      </header>
    </div>
  );
}



export default App;
