import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import v1Plugin from './v1/v1.routes';

async function apiRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(v1Plugin, { prefix: '/v1' });
}

export default apiRoutes;