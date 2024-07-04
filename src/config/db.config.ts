import mongoose from 'mongoose';

import config from './server.config';
import logger from './logger.config';

async function connectToDB() {
    try {
        if (config.NODE_ENV === "development") {
            if (!config.ATLAS_DB_URL) {
                throw new Error('ATLAS_DB_URL is not defined in the configuration');
            }
            await mongoose.connect(config.ATLAS_DB_URL);
            logger.info(`Connected to MongoDB`);
        }
    } catch (error) {
        logger.error(`Error when connecting to MongoDB: ${error}`);
    }
}

export default connectToDB;