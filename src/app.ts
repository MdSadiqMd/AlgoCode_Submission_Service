import fastifyPlugin from 'fastify-plugin';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import repositoryPlugin from './repositories/repositoryPlugin';
import serverPluginService from './services/serverPlugin.service';
import apiRoutes from './routes/api/api.routes';

/**
 * 
 * @param fastify - Fastify instance
 * @param options - Plugin options
 */
async function app(fastify: FastifyInstance, options: FastifyPluginOptions) {
    await fastify.register(require('@fastify/cors'));
    await fastify.register(repositoryPlugin);
    await fastify.register(serverPluginService);
    await fastify.register(apiRoutes, { prefix: '/api' });
}

export default fastifyPlugin(app);
