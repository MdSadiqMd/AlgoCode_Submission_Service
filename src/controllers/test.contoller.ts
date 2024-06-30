import { FastifyRequest, FastifyReply } from 'fastify';

import logger from '../config/logger.config';

async function pingRequest(this: any, req: FastifyRequest, res: FastifyReply) {
    logger.info(this.testService);
    try {
        const response = await this.testService.pingCheck();
        return res.send({ data: response });
    } catch (error) {
        logger.error(`Error in test Controller: ${error}`);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

export default pingRequest;
