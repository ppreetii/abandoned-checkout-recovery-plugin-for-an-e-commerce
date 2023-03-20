const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  devMongoDbUrl: process.env.DEV_MONGODB_URL,
  testMongoDbUrl: process.env.TEST_MONGODB_URL,
  prodMongoDbUrl: process.env.PROD_MONGODB_URL,
  environment : process.env.NODE_ENV,
  courierApiKey: process.env.COURIER_AUTH_TOKEN
};
