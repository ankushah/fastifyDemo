const fastify = require('fastify')({logger: true});
fastify.register(require('fastify-cors'), {
    preflight: false
});
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Transaction swagger',
            description: 'Transaction swagger based on blockchain api',
            version: '0.1.0'
        }
    }
});
fastify.register(require('./routes/index'));
const start = async () => {
    try {
        await fastify.listen(3000);
    } catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
};
start();