import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';
import todosRouter from './routers/todos.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(logger);

  app.use('/todos', todosRouter);
  const PORT = getEnvVar('PORT');

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port!!! Wohoo!!`);
  });
};
