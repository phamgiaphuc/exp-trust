import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from '@/configs/environment.config';
import { corsOptions } from '@/configs/cors.config';
import { logger } from '@/configs/logger.config';
import { loggerMiddleware } from '@/middlewares/logger.middleware';
import { apis_v1 } from '@/routes/v1';
import {user} from '@/routes/users/userRouter'
import { connectToDatabase } from '@/database/connectToDB';
const server = express();

server.use(express.json());
server.use(cors(corsOptions));
server.use(loggerMiddleware);
server.use('/api/v1', apis_v1);
server.use("/user", user);

const startTheServer = () => {
  connectToDatabase();
  server.listen(SERVER_PORT, () => {
    logger.info(`Server is listening on http://localhost:${SERVER_PORT}`);
  });
};

startTheServer();
