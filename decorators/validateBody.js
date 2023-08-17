const { HttpError } = require("../Helpers");

const validateBody = (schema) => {
  const validate = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, "missing required name field"));
    }
    next();
  };
  return validate;
};
module.exports = validateBody;
