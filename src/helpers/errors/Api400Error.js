const httpStatusCodes = require("../httpStatusCodes");
const APIError = require("../error");

class Api400Error extends APIError {
  constructor(message, statusCode = httpStatusCodes.BAD_REQUEST) {
    super(message, statusCode);
  }
}

module.exports = Api400Error;
