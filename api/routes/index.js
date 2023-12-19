const express = require('express');
const personRouter = require('./personRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/person', personRouter);
};

module.exports = routerApi;
