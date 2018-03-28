'use strict'
const Hapi = require('hapi')
const authKeycloak = require('hapi-auth-keycloak');

const port        = process.env.PORT || 8000; // allow port to be set

// create new server instance
const server = new Hapi.Server( {port: port} )
const options =  {
    realmUrl: 'http://192.168.64.19:8080/auth/realms/nodejs-example',
    clientId: 'nodejs-connect2',
    minTimeBetweenJwksRequests: 15,
    cache: true,
    userInfo: ['name', 'email']
  }

async function liftOff() {  
  await server.register(
    { plugin: authKeycloak, options }
  )
    server.auth.strategy('keycloak-jwt', 'keycloak-jwt');
    server.auth.default('keycloak-jwt');

    server.route(
    {
      method: 'GET',
      path: '/',
      config: {
        auth: {
          strategies: ['keycloak-jwt'],
          access: {
             scope: ['test']
          }
        },
          handler: function (request, h) {
   	    return h.response(request.auth.credentials);
          }
        }
    }
  );

  try {
    await server.start()
    console.log('info', 'Server running at: ' + server.info.uri)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

liftOff()  
