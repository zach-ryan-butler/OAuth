import React, { useContext, useState, useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export default function Auth0Wrapper({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, ...initOptions }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  // const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async() => {
      const auth0 = await createAuth0Client(initOptions);
      setAuth0(auth0);

      if(window.location.search.includes('code=')) {
        const { appState } = await auth0.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if(isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
  }, []);
  
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        auth0Client,
        loading,
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
