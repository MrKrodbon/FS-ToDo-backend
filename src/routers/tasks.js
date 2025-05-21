import { Router } from 'express';
import {
  addTasksController,
  deleteTasksController,
  getTasksController,
} from '../controllers/tasks.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const tasksRouter = Router();

tasksRouter.get('/', ctrlWrapper(getTasksController));

tasksRouter.post('/', ctrlWrapper(addTasksController));

tasksRouter.delete('/:id', ctrlWrapper(deleteTasksController));

export default tasksRouter;
