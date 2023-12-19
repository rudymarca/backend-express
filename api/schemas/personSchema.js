const Joi = require('joi');

const id = Joi.string().uuid();
const firstName = Joi.string().min(2).max(50);
const lastName = Joi.string().min(2).max(50);

const createPersonSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
});

const updatePersonSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
});

const getPersonSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPersonSchema, updatePersonSchema, getPersonSchema };
