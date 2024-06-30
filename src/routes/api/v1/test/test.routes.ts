import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import pingRequest from '../../../../controllers/test.contoller';

async function testRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/ping', pingRequest);
}

export default testRoutes;
