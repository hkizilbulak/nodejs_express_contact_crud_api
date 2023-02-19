const httpStatusCodes = require("./httpStatusCodes");

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || httpStatusCodes.BAD_REQUEST;
  }
}

module.exports = APIError;
