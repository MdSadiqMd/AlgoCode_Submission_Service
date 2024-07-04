import SubmissionProducer from "../producers/submission.producer";
import SubmissionRepository from "../repositories/submission.repository";
import logger from "../config/logger.config";

class SubmissionService {
    private submissionRepository: SubmissionRepository;

    constructor(submissionRepository: SubmissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async pingCheck(): Promise<string> {
        return 'pong';
    }

    async addSubmission(submissionObject: any) {
        try {
            const submission = await this.submissionRepository.createSubmission(submissionObject);
            if (!submission) {
                logger.error(`Error creating submission Object in submission Service`);
            }
            logger.info(`Submission: ${submission}`);
            const response = await SubmissionProducer(submissionObject);
            return { queueResponse: response, submission };
        } catch (error) {
            logger.error(`Error in creating Submission in Service: ${error}`);
            return 'Internal Server Error';
        }
    }
}

export default SubmissionService;