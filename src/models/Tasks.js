import { Schema, model } from 'mongoose';

const tasksSchema = new Schema(
  {
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
  },
  { versionKey: false, timestamps: true },
);

const TasksCollection = model('task', tasksSchema);

export default TasksCollection;
