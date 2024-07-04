import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import SubmissionService from './submission.service';
import SubmissionRepository from '../repositories/submission.repository';

async function servicePlugin(fastify: FastifyInstance, options: FastifyPluginOptions) {
    const submissionRepository = new SubmissionRepository();
    fastify.decorate('submissionService', new SubmissionService(submissionRepository));
}

export default fastifyPlugin(servicePlugin);