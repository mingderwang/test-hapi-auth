'use strict'
const Hapi = require('hapi')

// create new server instance
const server = new Hapi.Server()

const validate = async (request, username, password, h) => {

    if (username === 'help') {
        return { response: h.redirect('https://hapijs.com/help') };     // custom response
    }

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await Bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

async function liftOff() {  
  await server.register([
    {
      plugin: require('hapi-auth-basic')
    }
  ])


    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple');

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return 'welcome';
        }
   });

  try {
    await server.start()
    console.log('info', 'Server running at: ' + server.info.uri)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

liftOff()  
