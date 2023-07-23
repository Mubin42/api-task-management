import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import taskRoute from './routes/tasks.js';
import moment from 'moment/moment.js';

const app = express();
//middleware
app.use(express.json());

dotenv.config();

app.use('/api/v1', taskRoute);

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
