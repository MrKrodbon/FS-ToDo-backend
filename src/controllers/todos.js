import { deleteTodo, getTodos } from '../services/todosService.js';
import createError from 'http-errors';

export const getTodosController = async (req, res) => {
  const todos = await getTodos();

  res.status(200).json({
    status: 200,
    message: 'Successfuly found todos',
    todos,
  });
};

export const addTodosController = async (req, res) => {};

export const deleteTodosController = async (req, res) => {
  const id = req.params;

  const data = await deleteTodo(id);

  if (!data) {
    throw createError(404, `Not found todo with id ${id}`);
  }

  res.sendStatus(204);
};
