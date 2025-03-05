const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rewtc.mongodb.net/TodoList?retryWrites=true&w=majority&appName=Cluster0`);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to db: ", error);
  }
};

module.exports = connectDB;
