import { Worker } from "bullmq";
import axios from "axios";

import redisConnection from "../config/redis.config";
import config from "../config/server.config";
import logger from "../config/logger.config";

function evaluationWorker(queueName: string) {
    new Worker(
        queueName,
        async job => {
            if (job.name === 'EvaluationJob') {
                try {
                    const response = await axios.post(config.SOCKET_SERVICE_URL, {
                        userId: job.data.userId,
                        payload: job.data.response
                    }, { timeout: 10000 });
                    logger.info(`Payload sent to Socket Service: ${JSON.stringify(response)}`);
                } catch (error: any) {
                    logger.error(`Error in sending Payload to Socket Service: ${error}`);
                }
            }
        },
        {
            connection: redisConnection,
            limiter: {
                max: 5,
                duration: 1000
            }
        }
    );

}

export default evaluationWorker;