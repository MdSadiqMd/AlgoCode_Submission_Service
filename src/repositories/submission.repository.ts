import Submission from "../models/submission.model";
import { createSubmission } from "../controllers/submission.contoller";

class SubmissionRepository {
    private submissionModel: typeof Submission;

    constructor() {
        this.submissionModel = Submission;
    }

    async createSubmission(submission: any) {
        const response = await this.submissionModel.create(submission);
        return response;
    }
}

export default SubmissionRepository;