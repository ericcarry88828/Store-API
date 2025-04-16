require('dotenv').config();

const { default: mongoose } = require('mongoose');
const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

start();
