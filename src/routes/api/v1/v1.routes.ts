import { FastifyInstance, FastifyPluginOptions } from 'fastify';

async function v1Plugin(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(require('./submission.routes'), { prefix: '/submissions' });
}

export default v1Plugin;
