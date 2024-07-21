import axiosInstance from '../config/axios.config';
import logger from '../config/logger.config';
import config from '../config/server.config';

const PROBLEM_ADMIN_API = `${config.PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

async function fetchProblemDetails(problemId: string) {
    try {
        const uri: string = PROBLEM_ADMIN_API + `/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        logger.info(`API Response: ${response}`);
        return response;
    } catch (error: any) {
        logger.error(`Error Fetching problem Details: ${error}`);
    }
}

export default fetchProblemDetails;
