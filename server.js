import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get('/hello', (req, res) => {
  res.send({ hello: 'Hello World' });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on Port: ${port}`));
