const express = require('express');
const routerApi = require('./routes');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('HOLA MENSUALIDAD');
});

app.get('/one', (req, res) => {
  res.send('RUTA ONE');
});

routerApi(app);

app.listen(port, () => {
  console.log('CORRIENDO EN ' + port);
});
