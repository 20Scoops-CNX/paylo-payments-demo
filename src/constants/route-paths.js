import createRouteUrlProvider from 'utils/routeUrlProvider';

export const HOME = 'HOME';
export const ROOMS = 'ROOMS';
export const ROOM_DETAIL = 'ROOM_DETAIL';
export const RESULT = 'RESULT';

const routeUrlProvider = createRouteUrlProvider();

routeUrlProvider.set(HOME, '/');
routeUrlProvider.set(ROOMS, '/rooms');
routeUrlProvider.set(ROOM_DETAIL, '/rooms/:id');
routeUrlProvider.set(RESULT, '/:id/:result');

export default routeUrlProvider;
