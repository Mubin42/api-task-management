import { mongoose, Schema } from 'mongoose';

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Must provide a name'],
      trim: true,
      maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', TaskSchema);

export default Task;
