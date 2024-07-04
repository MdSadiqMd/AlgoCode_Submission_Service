import { FastifyInstance, FastifyPluginOptions } from 'fastify';

async function v1Plugin(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(require('./submission.routes'), { prefix: '/submission' });
}

export default v1Plugin;