const httpStatusCodes = require("../helpers/httpStatusCodes");
const APIError = require("../helpers/error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof APIError) {
    const errStatus = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
    const errMsg = err.message || "Something went wrong";
    return res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === "development" ? err.stack : {},
    });
  }

  return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
  });
};

module.exports = errorHandler;
