const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successfuly");
  } catch (error) {
    console.log(`Database connection fail. Error details : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDb;
