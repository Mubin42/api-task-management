import { mongoose, Schema } from 'mongoose';

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name'],
    trim: true,
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
