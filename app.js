const express = require('express');
const morgan=require('morgan');
const app = express();

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());

app.use(morgan('tiny'));

app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
