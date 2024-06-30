import fastify from 'fastify';

import logger from './config/logger.config';

const server = fastify();
server.get('/ping', async (request, reply) => {
    return 'pong\n';
});

server.listen({ port: 8080 }, (error, address) => {
    if (error) {
        logger.error(`Error Starting Server: ${error}`);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});