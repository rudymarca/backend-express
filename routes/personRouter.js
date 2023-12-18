const express = require('express');
const PersonServices = require('../services/PersonServices');

const service = new PersonServices();
const router = express.Router();
// GET
router.get('/', async (req, res) => {
  const person = await service.find();
  res.json(person);
});
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await service.findOne(id);
    res.json(person);
  } catch (error) {
    next(error);
  }
});
// POST
router.post('/', async (req, res) => {
  const newPerson = await service.create(req.body);
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
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatePerson = await service.update(id, body);
    res.json(updatePerson);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletePerson = await service.delete(id);
  res.json(deletePerson);
});
module.exports = router;
