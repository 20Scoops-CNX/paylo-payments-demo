import React from 'react';
import { Route } from 'react-router-dom';
import routeUrlProvider, { HOME as HOME_PATH } from 'constants/route-paths';
import Home from './pages/Home';

const Router = () => {
  return (
    <div>
      <Route
        exact
        path={routeUrlProvider.getForRoute(HOME_PATH)}
        component={Home}
      />
    </div>
  );
};

export default Router;
