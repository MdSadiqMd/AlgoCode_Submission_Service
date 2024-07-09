import Submission from "../models/submission.model";

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
