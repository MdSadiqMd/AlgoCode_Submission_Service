import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import TestService from './test.service';

async function servicePlugin(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.decorate('testService', new TestService());
}

export default fastifyPlugin(servicePlugin);