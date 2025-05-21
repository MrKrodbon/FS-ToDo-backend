import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';
import tasksRouter from './routers/tasks.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const startServer = () => {
  const PORT = getEnvVar('PORT');
  const app = express();

  app.use(express.json());
  app.use(logger);

  app.use('/tasks', tasksRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port!!! Wohoo!!`);
  });
};
