import React from 'react';
import { Route } from 'react-router-dom';
import routeUrlProvider, {
  HOME as HOME_PATH,
  ROOMS as ROOMS_PATH,
  ROOM_DETAIL as ROOM_DETAIL_PATH,
  RESULT as RESULT_PATH
} from 'constants/route-paths';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Result from './pages/Results';

const Router = () => {
  return (
    <div>
      <Route
        exact
        path={routeUrlProvider.getForRoute(HOME_PATH)}
        component={Home}
      />
      <Route
        exact
        path={routeUrlProvider.getForRoute(ROOMS_PATH)}
        component={Rooms}
      />
      <Route
        exact
        path={routeUrlProvider.getForRoute(ROOM_DETAIL_PATH)}
        component={Room}
      />
      <Route
        exact
        path={routeUrlProvider.getForRoute(RESULT_PATH)}
        component={Result}
      />
    </div>
  );
};

export default Router;
