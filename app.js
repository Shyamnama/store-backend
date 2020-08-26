const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
// const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// import routes
const authRoute = require('./routes/auth');
const braintreeRoute = require('./routes/braintree');
const categoryRoute = require('./routes/category');
const orderRoute = require('./routes/order');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('db connected');
  });

//middleware
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', authRoute);
app.use('/api', braintreeRoute);
app.use('/api', categoryRoute);
app.use('/api', orderRoute);
app.use('/api', productRoute);
app.use('/api', userRoute);

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
