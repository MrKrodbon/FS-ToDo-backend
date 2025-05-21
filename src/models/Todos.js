import { Schema, model } from 'mongoose';

const todosSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const TodosCollection = model('todo', todosSchema);

export default TodosCollection;
