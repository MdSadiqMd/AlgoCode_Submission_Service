import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import SubmissionRepository from './submission.repository';

async function repositoryPlugingin(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.decorate('submissionRepository', new SubmissionRepository());
}

export default fastifyPlugin(repositoryPlugingin);