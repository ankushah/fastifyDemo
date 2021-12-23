const fastify = require('fastify')({logger: true});
fastify.register(require('./routes'));
fastify.register(require('fastify-swagger'), {
    routePrefix: '/',
    swagger: {
        info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
        }
    }
});
const start = async () => {
    try {
        await fastify.listen(3000);
    } catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
};
start();