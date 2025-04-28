require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const productsRouter = require('./routes/products');
const populate = require('./populate');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    populate(); // Populate the database with products
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
