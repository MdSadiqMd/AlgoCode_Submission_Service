import { FastifyRequest, FastifyReply } from 'fastify';
import { StatusCodes } from "http-status-codes";

import logger from '../config/logger.config';

export async function pingRequest(this: any, req: FastifyRequest, res: FastifyReply) {
    logger.info(this.testService);
    try {
        const response = await this.testService.pingCheck();
        return res.status(StatusCodes.OK).send({ data: response });
    } catch (error) {
        logger.error(`Error in Ping Request: ${error}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: 'Internal Server Error' });
    }
}

export async function createSubmission(this: any, req: FastifyRequest, res: FastifyReply) {
    try {
        const response = await this.submissionService.addSubmission(req.body);
    } catch (error) {
        logger.error(`Error in create Submission Request: ${error}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: 'Internal Server Error' });
    }
}