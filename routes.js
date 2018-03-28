async function register(server, options) {
  server.route([{
    method: 'GET',
    path: '/',
    config: {
      auth: {
        strategies: ['keycloak-jwt'],
        access: {
          scope: ['realm:admin', 'editor', 'other-resource:creator',
            'scope:foo.READ'
          ]
        }
      },
      handler(req, reply) {
        console.log('ming')
        reply(req.auth.credentials);
      }
    }
  }]);
}

module.exports = {
  register,
  name: 'example-routes',
    version: '0.0.1'
};
