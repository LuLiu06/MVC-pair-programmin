const express = require("express");
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Middleware to parse JSON
app.use(express.json());

// ROUTES
// GET /tours
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});