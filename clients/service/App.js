import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import PrivateRoute from '../shared/components/PrivateRoute';
import socket from '../shared/helpers/socket';
import Home from '../shared/components/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    socket.connect('service');
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Service</h1>
      <NavLink to="/tester">Tester</NavLink>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Redirect to="/dashboard" /> : <Home setIsAuth={setIsAuth} />}
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} isAuth={isAuth} />
        <Route path="/tester">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
