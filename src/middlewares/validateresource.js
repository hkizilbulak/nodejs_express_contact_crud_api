const { Api400Error } = require("../helpers/errors/index");

const validateResourceMW = (resourceSchema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await resourceSchema.validate(resource);
    next();
  } catch (e) {
    console.error(e);
    throw new Api400Error(e.errors.join(", "));
  }
};

module.exports = validateResourceMW;
