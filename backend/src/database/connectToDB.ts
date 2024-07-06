import { logger } from '@/configs/logger.config';
import mongoose from 'mongoose';

const MONGODB_URL = "mongodb+srv://admin:123@cluster0.aeysnuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectToDatabase = () => {
  mongoose
    .connect(MONGODB_URL.includes('<password>') ? MONGODB_URL.replace('<password>', '123') : MONGODB_URL)
    .then(() => {
      logger.info('MongoDB is connected')
    })
    .catch((error) => {
      return logger.error('MongoDB is not connected', {error: error.message})
    })
};