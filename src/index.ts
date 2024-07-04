import fastify from 'fastify';

import config from './config/server.config';
import logger from './config/logger.config';
import app from './app';
import connectToDB from './config/db.config';

const server = fastify({ logger: true });
server.register(app);
server.listen({ port: Number(config.PORT) }, (error: Error | null) => {
    if (error) {
        logger.error(`Error Connecting to Port: ${error}`);
        process.exit(1);
    }
    console.log(`Server up at port ${config.PORT}`);
    try {
        connectToDB();
        logger.info(`Connected to DB`);
    } catch (error) {
        logger.error(`Error Connecting to DB: ${error}`);
    }
});