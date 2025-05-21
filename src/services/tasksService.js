import TasksCollection from '../models/Tasks.js';

export const getTasks = () => TasksCollection.find();

export const addTask = (payload) => TasksCollection.create(payload);

export const deleteTask = (id) => TasksCollection.findOneAndDelete(id);
