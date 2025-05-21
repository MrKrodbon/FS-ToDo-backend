import TodosCollection from '../models/Todos.js';

export const getTodos = () => TodosCollection.find();

export const deleteTodo = (id) => TodosCollection.findOneAndDelete(id);
