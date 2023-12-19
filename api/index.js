const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../middlewares/errorHandler');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// const whiteList = ['https://myapp.com'];
// const optionCors = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   },
// };
// app.use(cors(optionCors));
app.use(cors());

app.get('/api', (req, res) => {
  res.send('HOLA MENSUALIDAD');
});

app.get('/api/one', (req, res) => {
  res.send('RUTA ONE');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('CORRIENDO EN ' + port);
});
