const { version } = require("../package.json");
const {
  Contact,
  CreateContact,
  createContact,
  getAllContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("./contact");
const Error = require("./error");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NodeJs Crud API",
      version,
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Huseyin Kizilbulak",
        email: "huseyinkizilbulak76@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5001/api",
      },
    ],
    paths: {
      "/contacts": {
        post: createContact,
        get: getAllContacts,
      },
      "/contacts/{id}": {
        get: getContact,
        put: updateContact,
        delete: deleteContact,
      },
    },
    components: {
      schemas: {
        Contact,
        CreateContact,
        Error,
      },
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    tags: [
      {
        name: "Contacts",
      },
    ],
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/schema/*.js"],
};

module.exports = swaggerOptions;
