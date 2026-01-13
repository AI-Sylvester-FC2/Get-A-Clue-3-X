import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import { ServerError } from './types.js';

const app = express();

console.log('Express app created');


app.use(cors());
app.use(express.json());



// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Add a test route to make sure routing works
app.get('/test', (req, res) => {
  console.log('TEST ROUTE HIT!');
  res.json({ test: 'This is a test route' });
});


// ... rest of your code (error handler)
const errorHandler: ErrorRequestHandler = (
  err: ServerError,
  _req,
  res,
  _next
) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj: ServerError = { ...defaultErr, ...err };
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
};

app.use(errorHandler);

export default app;