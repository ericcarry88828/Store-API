const Product = require('./models/product');

const jsonProducts = require('./products.json');

const populate = async () => {
  try {
    await Product.deleteMany();
    await Product.create(jsonProducts);
  } catch (error) {
    console.log(error);
  }
};
module.exports = populate;
