import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    REDIS_PORT: process.env.REDIS_PORT || "6379",
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    PROBLEM_ADMIN_SERVICE_URL: process.env.PROBLEM_ADMIN_SERVICE_URL || 'http://localhost:3005',
    SOCKET_SERVICE_URL: process.env.SOCKET_SERVICE_URL || 'http://localhost:3001/sendPayload'
};

export default config;
