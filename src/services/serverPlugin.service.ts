import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import SubmissionService from './submission.service';

async function servicePlugin(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.decorate('submissionService', new SubmissionService());
}

export default fastifyPlugin(servicePlugin);