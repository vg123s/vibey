import { expressjwt } from 'express-jwt';

export const checkJwt = (credentialRequired = true) =>
  expressjwt({
    algorithms: ['RS256'],
    credentialsRequired: credentialRequired,
  });
