import createRouteUrlProvider from 'utils/routeUrlProvider';

export const HOME = 'HOME';

const routeUrlProvider = createRouteUrlProvider();

routeUrlProvider.set(HOME, '/');

export default routeUrlProvider;
