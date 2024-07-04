import logger from "../config/logger.config";
import submissionQueue from "../queues/submission.queue";

async function SubmissionProducer(payload: Record<string, unknown>) {
    await submissionQueue.add('SubmissionJob', payload);
    logger.info(`Successfully added new submission job`);
}

export default SubmissionProducer;