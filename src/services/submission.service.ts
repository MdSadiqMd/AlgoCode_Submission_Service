class SubmissionService {
    constructor() {
        // inject here
    }

    async pingCheck(): Promise<string> {
        return 'pong';
    }

    async addSubmission(submission: any) {

    }
}

export default SubmissionService;