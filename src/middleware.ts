import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({
  returnTo: '/auth/login',
});

export const config = {
  matcher: ['/dashboard', '/ai'],
};
