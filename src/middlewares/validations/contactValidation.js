const yup = require("yup");

const createContactValidationSchema = yup.object({
  firstName: yup
    .string()
    .required("Firstname is required")
    .min(3, "Firstname must be minimum 3 characters")
    .max(100, "Firstname must be maximum 100 characters"),
  lastName: yup
    .string()
    .required("Lastname is required")
    .min(3, "Lastname must be minimum 3 characters")
    .max(100, "Lastname must be maximum 100 characters"),
  email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email address"),
  phoneNumber: yup.string().required("Phone Number is required"),
});

module.exports = { createContactValidationSchema };
