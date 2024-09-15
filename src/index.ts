import fastify from 'fastify';

import app from './app';
import config from './config/server.config';
import logger from './config/logger.config';
import connectToDB from './config/db.config';
import evaluationWorker from './workers/evaluation.worker';

const server = fastify({ logger: true });
server.register(app);
server.listen({ port: Number(config.PORT), host: '0.0.0.0' }, async (error: Error | null) => {
    if (error) {
        logger.error(`Error Connecting to Port: ${error}`);
        process.exit(1);
    }
    console.log(`Server up at port ${config.PORT}`);
    try {
        await connectToDB();
        logger.info(`Connected to DB`);

        evaluationWorker('EvaluationQueue');
        logger.info(`Evaluation Queue Init`);
    } catch (error: any) {
        logger.error(`Initialization Error: ${error}`);
        process.exit(1);
    }
});
