import React from 'react';
import AllDogs from '../container/AllDogs';
import { useAuth0 } from '../Auth0Wrapper';

export default function App() {
  const { user, isAuthenticated, auth0Client, loading } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();
  
  return (
    <>
      {!isAuthenticated && <button  onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
      {isAuthenticated && <AllDogs />}
    </>
  );
}
