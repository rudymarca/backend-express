const express = require('express');
const PersonServices = require('../services/PersonServices');

const service = new PersonServices();
const router = express.Router();
// GET
router.get('/', (req, res) => {
  const person = service.find();
  res.json(person);
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const person = service.findOne(id);
  res.json(person);
});
// POST
router.post('/', (req, res) => {
  const newPerson = service.create(req.body);
  res.status(201).json(newPerson);
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
  const updatePerson = service.update(id, body);
  res.json(updatePerson);
});
// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletePerson = service.delete(id);
  res.json(deletePerson);
});
module.exports = router;
