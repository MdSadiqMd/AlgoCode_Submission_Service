import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import testRoutes from './test/test.routes';

async function v1Routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(testRoutes, { prefix: '/test' });
}

export default v1Routes;