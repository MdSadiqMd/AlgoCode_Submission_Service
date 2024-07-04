import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { createSubmission } from '../../../controllers/submission.contoller';

async function submissionRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post('/', createSubmission);
}

export default submissionRoutes;