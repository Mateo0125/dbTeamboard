// importar libreria que administra mongo en el codigo

// const mongoose = require("mongoose"); esta es una manera anticuada
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("You are connected to MongoDB: OK");
  } catch (e) {
    console.log("Error connecting to MongoDB: \n" + e);
  }
};

export default { dbConnection };
