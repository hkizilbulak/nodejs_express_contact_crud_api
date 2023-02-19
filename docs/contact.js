const createContact = {
  tags: ["Contacts"],
  description: "Create a new contact",
  operationId: "createContact",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/CreateContact",
        },
        example: {
          firstName: "Alexander",
          lastName: "Bell",
          email: "alexbell@gmail.com",
          phoneNumber: "9983273211",
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: "The created contact",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Contact",
            },
            example: {
              id: "63f22055333b9e4be7b7e239",
              firstName: "Alexander",
              lastName: "Bell",
              email: "alexbell@gmail.com",
              phoneNumber: "9983273211",
              createdAt: "2020-03-10T04:05:06.157Z",
              updatedAt: "2020-04-12T07:15:21.157Z",
            },
          },
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 400,
              message: "Contact already exist",
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 500,
              message: "Internal Server Error",
            },
          },
        },
      },
    },
  },
};

const getAllContacts = {
  tags: ["Contacts"],
  description: "Get all the contacts",
  operationId: "getAllContacts",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: "All contacts",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Contact",
            },
            example: [
              {
                id: "63f22055333b9e4be7b7e239",
                firstName: "Alexander",
                lastName: "Bell",
                email: "alexbell@gmail.com",
                phoneNumber: "9983273211",
                createdAt: "2020-03-10T04:05:06.157Z",
                updatedAt: "2020-04-12T07:15:21.157Z",
              },
            ],
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 500,
              message: "Internal Server Error",
            },
          },
        },
      },
    },
  },
};

const getContact = {
  tags: ["Contacts"],
  description: "Get contact detail",
  operationId: "getContact",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Contact id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "Contact detail",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Contact",
            },
            example: {
              id: "63f22055333b9e4be7b7e239",
              firstName: "Alexander",
              lastName: "Bell",
              email: "alexbell@gmail.com",
              phoneNumber: "9983273211",
              createdAt: "2020-03-10T04:05:06.157Z",
              updatedAt: "2020-04-12T07:15:21.157Z",
            },
          },
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 404,
              message: "Contact not found",
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 500,
              message: "Internal Server Error",
            },
          },
        },
      },
    },
  },
};

const updateContact = {
  tags: ["Contacts"],
  description: "Update the contact",
  operationId: "updateContact",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Contact id",
      required: true,
      type: "string",
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/CreateContact",
        },
        example: {
          firstName: "Alexander",
          lastName: "Bell",
          email: "alexbell@gmail.com",
          phoneNumber: "9983273211",
        },
      },
    },
    required: true,
  },
  responses: {
    201: {
      description: "The updated contact",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Contact",
            },
            example: {
              id: "63f22055333b9e4be7b7e239",
              firstName: "Alexander",
              lastName: "Bell",
              email: "alexbell@gmail.com",
              phoneNumber: "9983273211",
              createdAt: "2020-03-10T04:05:06.157Z",
              updatedAt: "2020-04-12T07:15:21.157Z",
            },
          },
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 400,
              message: "Contact already exist",
            },
          },
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 404,
              message: "Contact not found",
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 500,
              message: "Internal Server Error",
            },
          },
        },
      },
    },
  },
};

const deleteContact = {
  tags: ["Contacts"],
  description: "Delete the contact",
  operationId: "deleteContact",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Contact id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "The deleted contact",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Contact",
            },
            example: {
              id: "63f22055333b9e4be7b7e239",
              firstName: "Alexander",
              lastName: "Bell",
              email: "alexbell@gmail.com",
              phoneNumber: "9983273211",
              createdAt: "2020-03-10T04:05:06.157Z",
              updatedAt: "2020-04-12T07:15:21.157Z",
            },
          },
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 404,
              message: "Contact not found",
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            schema: {
              $ref: "#/components/schemas/Error",
            },
            example: {
              success: false,
              status: 500,
              message: "Internal Server Error",
            },
          },
        },
      },
    },
  },
};

const Contact = {
  type: "object",
  properties: {
    _id: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    phoneNumber: {
      type: "string",
    },
    createdAt: {
      type: "string",
      format: "date",
    },
    updatedAt: {
      type: "string",
      format: "date",
    },
  },
};

const CreateContact = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    phoneNumber: {
      type: "string",
    },
  },
};

module.exports = {
  createContact,
  getAllContacts,
  getContact,
  updateContact,
  deleteContact,
  Contact,
  CreateContact,
};
