const mongoose = require("mongoose");

const isValidId = (id) => {
  return mongoose.isValidObjectId(id);
};

module.exports = { isValidId };
