import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import taskRoute from './routes/tasks.js';
import userRoute from './routes/users.js';

const app = express();
//middleware
app.use(express.json());

dotenv.config();

//routes
app.use('/api/v1', taskRoute);
app.use('/api/v1', userRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server running on Port: ${port}`));
  } catch (error) {
    console.log('Server Shut Down, Error:', error);
  }
};

start();
