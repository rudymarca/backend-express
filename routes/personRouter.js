const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// GET
router.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    nombre: 'Rudy',
    apellido: 'Marca',
  });
});
// POST
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Created',
    data: body,
  });
});
// PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated All',
    data: body,
    id,
  });
});
// PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated partial',
    data: body,
    id,
  });
});
// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
});
module.exports = router;
