const Error = {
  type: "object",
  properties: {
    success: {
      type: "boolean",
    },
    status: {
      type: "number",
    },
    message: {
      type: "string",
    },
  },
};

module.exports = Error;
