const APIError = require("../error");
const httpStatusCodes = require("../httpStatusCodes");

class Api404Error extends APIError {
  constructor(message, statusCode = httpStatusCodes.NOT_FOUND) {
    super(message, statusCode);
  }
}

module.exports = Api404Error;
