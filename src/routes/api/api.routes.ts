import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import v1Routes from './v1/v1.routes';

async function apiRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(v1Routes, { prefix: '/v1' });
}

export default apiRoutes;