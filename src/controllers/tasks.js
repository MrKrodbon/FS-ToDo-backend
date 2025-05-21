import { addTask, deleteTask, getTasks } from '../services/tasksService.js';
import createError from 'http-errors';

export const getTasksController = async (req, res) => {
  const tasks = await getTasks();

  res.status(200).json({
    status: 200,
    message: 'Successfuly found tasks',
    tasks,
  });
};

export const addTasksController = async (req, res) => {
  console.log(req.body);

  const task = await addTask(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfuly added task',
    task,
  });
};

export const deleteTasksController = async (req, res) => {
  const id = req.params;

  const data = await deleteTask(id);

  if (!data) {
    throw createError(404, `Not found task with id ${id}`);
  }

  res.sendStatus(204);
};
