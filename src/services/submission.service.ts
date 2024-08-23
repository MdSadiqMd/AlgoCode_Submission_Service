import SubmissionProducer from "../producers/submission.producer";
import SubmissionRepository from "../repositories/submission.repository";
import logger from "../config/logger.config";
import fetchProblemDetails from "../apis/problemAdmin.api";

class SubmissionService {
    private submissionRepository: SubmissionRepository;

    constructor(submissionRepository: SubmissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async pingCheck(): Promise<string> {
        return 'pong';
    }

    async addSubmission(submissionPayload: any): Promise<any> {
        try {
            const problemId = submissionPayload.problemId;
            const userId = submissionPayload.userId;
            const problemAdminApiResponse = await fetchProblemDetails(problemId);
            logger.info(`Problem Admin API Response: ${problemAdminApiResponse}`);

            if (!problemAdminApiResponse || !problemAdminApiResponse.data) {
                throw new Error(`Failed to fetch problem details from the API`);
            }

            const codeStubs = problemAdminApiResponse.data.data.codeStubs;
            if (!codeStubs) {
                throw new Error(`No code stubs found in the API response`);
            }

            const languageCodeStub = codeStubs.find(
                (codeStub: { language: string; }) => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase()
            );
            if (!languageCodeStub) {
                throw new Error(`No code stub found for the language: ${submissionPayload.language}`);
            }
            logger.info(`Language Code Stub: ${languageCodeStub}`);

            submissionPayload.code = `${languageCodeStub.startSnippet}\n\n${submissionPayload.code}\n\n${languageCodeStub.endSnippet}`;
            const submission = await this.submissionRepository.createSubmission(submissionPayload);
            if (!submission) {
                throw new Error(`Failed to create a submission in the repository`);
            }
            logger.info(`Submission: ${submission}`);

            if (!problemAdminApiResponse.data.data.testCases || problemAdminApiResponse.data.data.testCases.length === 0) {
                throw new Error(`No test cases found in the API response`);
            }

            const inputCases = problemAdminApiResponse.data.data.testCases.map(
                (testCase: { input: string }) => testCase.input
            );

            const outputCases = problemAdminApiResponse.data.data.testCases.map(
                (testCase: { output: string }) => testCase.output
            );

            const response = await SubmissionProducer({
                [submission._id as unknown as string]: {
                    userId,
                    submissionId: submission._id,
                    code: submission.code,
                    language: submission.language,
                    inputCase: inputCases,
                    outputCase: outputCases,
                }
            });
            return { queueResponse: response, submission };
        } catch (error) {
            logger.error(`Error in creating Submission in Service: ${error}`);
            return 'Internal Server Error';
        }
    }
}

export default SubmissionService;