const env = require('./config');

let connectionUrl = {
  development: {
    mongoDbUrl: env.devMongoDbUrl
  },
  test: {
    mongoDbUrl: env.testMongoDbUrl
  },
  production: {
    mongoDbUrl: env.prodMongoDbUrl
  }
};

exports.mongoDbUrl = connectionUrl[env.environment].mongoDbUrl;

