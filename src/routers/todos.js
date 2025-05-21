import { Router } from 'express';
import {
  addTodosController,
  deleteTodosController,
  getTodosController,
} from '../controllers/todos.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const todosRouter = Router();

todosRouter.get('/', getTodosController);

todosRouter.post('/', ctrlWrapper(addTodosController));

todosRouter.delete('/:id', ctrlWrapper(deleteTodosController));

export default todosRouter;
