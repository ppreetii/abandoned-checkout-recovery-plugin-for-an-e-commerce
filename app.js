const express = require('express');

const API = require('./src/constants/api');
const webhookRoutes = require('./src/routes/v1/webhook');

const app = express();

const handleUnhandledOperation = () => {
  process
    .on('unhandledRejection', (reason) => {
      console.error('Unhandled Rejection at Promise', reason);
    })
    .on('uncaughtException', (err) => {
      console.error('Uncaught Exception thrown', err);
      process.exit(1);
    });
};

module.exports = () => {
  handleUnhandledOperation();

  app.use(express.json());
  app.use(API.BASE_URL, webhookRoutes);
  app.use((error, req, res, next) => {
    res.status(500).json({
      status: "Error",
      reason: error
    });
  });

  app.use('*', (req, res) => res.status(404).json({
    status: 404,
    message: 'Page not found'
  }));
  
  return app;
};
