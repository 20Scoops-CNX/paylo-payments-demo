import createRouteUrlProvider from 'utils/routeUrlProvider';

export const HOME = 'HOME';
export const ROOMS = 'ROOMS';
export const ROOM_DETAIL = 'ROOM_DETAIL';

const routeUrlProvider = createRouteUrlProvider();

routeUrlProvider.set(HOME, '/');
routeUrlProvider.set(ROOMS, '/rooms');
routeUrlProvider.set(ROOM_DETAIL, '/rooms/:id');

export default routeUrlProvider;
