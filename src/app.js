require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dataRoute = require('./routes/dataRoute');

const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  rateLimit({
    windowMs: 1000 * 60 * 1,
    max: 1000,
    message: { message: 'too many requests!!!!' },
  })
);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/data', dataRoute);


app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(process.env.PORT || 8000, () =>
  console.log('Server running on port ' + process.env.PORT)
);
