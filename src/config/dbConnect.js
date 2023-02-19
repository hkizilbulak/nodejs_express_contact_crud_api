const mongoose = require("mongoose");
const logger = require("../helpers/logger");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Database connection successfuly");
  } catch (error) {
    logger.error(`Database connection fail. Error details : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDb;
