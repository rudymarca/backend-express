const personRouter = require('./personRouter');

const routerApi = (app) => {
  app.use('/person', personRouter);
};

module.exports = routerApi;
