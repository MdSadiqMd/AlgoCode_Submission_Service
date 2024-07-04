import SubmissionProducer from "../producers/submission.producer";
import logger from "../config/logger.config";

class SubmissionService {
    constructor() {
        // inject here
    }

    async pingCheck(): Promise<string> {
        return 'pong';
    }

    async addSubmission(submission: any) {
        try {
            const response = await SubmissionProducer(submission);
            return response;
        } catch (error) {
            logger.error(`Error in creating Submission in Service: ${error}`);
            return 'Internal Server Error';
        }
    }
}

export default SubmissionService;