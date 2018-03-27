'use strict'
const hapi = require('hapi');
const authKeycloak = require('hapi-auth-keycloak');
const routes = require('./routes');

const server = hapi.server({ port: 3000 });

const options = {
  realmUrl: 'https://secure.eth.cards/auth/realms/testme',
  clientId: 'foobar',
  minTimeBetweenJwksRequests: 15,
  cache: true,
  userInfo: ['name', 'email']
};

process.on('SIGINT', async () => {
  try { 
    await server.stop();
  } catch (err) {
    process.exit(err ? 1 : 0);
  }
});

(async () => {
  try {
    await server.register({ plugin: authKeycloak, options });
    server.auth.strategy('keycloak-jwt', 'keycloak-jwt');
    await server.register({ plugin: routes });
    await server.start();
    console.log('Server started successfully');
  } catch (err) {
    console.error(err);
  }
})();
