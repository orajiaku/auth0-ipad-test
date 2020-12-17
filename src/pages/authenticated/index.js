import { useEffect, useState } from 'react';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import * as config from '../../config';

import logo from '../../logo.svg';
import '../../App.css';

function App() {
  const [fetchingToken, setFetchingToken] = useState(true);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { getAccessTokenSilently, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      setFetchingToken(true)

      setMessage('Attempting login');

      try {
        await getAccessTokenSilently({
          audience: config.AUTH0_AUDIENCE,
          scope: 'read'
        });

        setMessage('Logged in successfully');
        setErrorMessage('');

        setFetchingToken(false)
      } catch(e) {
        setErrorMessage(e.message);
        setMessage('');

        setFetchingToken(false);
      }
    }

    if (isAuthenticated) getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  const handleLogout = () => {
    logout({ returnTo: config.REDIRECT_URL });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {fetchingToken &&
          <div>
            LOADING TOKEN...
          </div>
        }

        <div>
          <h2>
            {message}
          </h2>
        </div>

        <div>
          <h2 style={{ color: 'red' }}>
            {errorMessage}
          </h2>
        </div>

        {isAuthenticated &&
          <button onClick={handleLogout}>
            Logout
          </button>
        }
      </header>
    </div>
  );
}



export default withAuthenticationRequired(App, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
