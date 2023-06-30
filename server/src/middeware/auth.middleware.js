import { expressjwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const checkJwt = (credentialRequired = true) =>
  expressjwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://www.googleapis.com/oauth2/v3/certs',
    }),
    algorithms: ['RS256'],
    issuer: ['https://accounts.google.com'],
    credentialsRequired: credentialRequired,
  });
