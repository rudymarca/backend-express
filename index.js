const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('HOLA MENSUALIDAD');
});

app.get('/one', (req, res) => {
  res.send('RUTA ONE');
});

app.get('/personas', (req, res) => {
  const { size } = req.query;
  const defaultSize = size || 2;
  let persons = [];
  for (let index = 0; index < defaultSize; index++) {
    persons.push({
      prefix: faker.person.prefix(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      fullName: faker.person.fullName(),
      gender: faker.person.gender(),
      avatar: faker.image.avatar(),
      sex: faker.person.sex(),
    });
  }
  res.json(persons);
});
app.get('/personas/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    nombre: 'Rudy',
    apellido: 'Marca',
  });
});

app.get('/persons', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.listen(port, () => {
  console.log('CORRIENDO EN ' + port);
});
