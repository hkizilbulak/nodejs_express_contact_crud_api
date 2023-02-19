const express = require("express");
require("express-async-errors");
require("dotenv").config();
const connectDb = require("./src/config/dbConnect");
const swaggerDocs = require("./src/helpers/swagger");
const app = express();
const PORT = process.env.PORT || 5001;
const errorHandler = require("./src/middlewares/errorHandler");
const contactRoutes = require("./src/routes/contactRoutes");
const logger = require("./src/helpers/logger");

app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.send("Node JS Crud API");
});

app.use(errorHandler);

connectDb()
  .then(() => {
    app.listen(PORT, () => logger.info(`Server is running at ${PORT}`));
    swaggerDocs(app);
  })
  .catch((error) => {
    logger.error(`Database connection failed. Error detail : ${error.message}`);
  });
