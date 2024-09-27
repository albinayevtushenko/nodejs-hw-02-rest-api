const { HttpError } = require("../Helpers");

const validateBody = (schema) => {
  const validate = (req, res, next) => {
    const body = req.body;
    if (Object.keys(body).length === 0) {
      next(HttpError(400, "missing fields"));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
  return validate;
};
module.exports = validateBody;
