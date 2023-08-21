const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string().required().email().messages({
    "any.required": "missing required name field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
});

module.exports = contactsSchema;
