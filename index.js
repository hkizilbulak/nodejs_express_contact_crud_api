const express = require("express");
require("express-async-errors");
require("dotenv").config();
const connectDb = require("./src/config/dbConnect");
const app = express();
const PORT = process.env.PORT || 5001;
const errorHandler = require("./src/middlewares/errorHandler");
const contactRoutes = require("./src/routes/contactRoutes");

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Node JS Crud API");
});

app.use(errorHandler);

connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
  })
  .catch((error) => {
    console.log(`Database connection failed. Error detail : ${error.message}`);
  });
