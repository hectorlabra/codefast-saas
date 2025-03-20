import mongoose from "mongoose";

const conectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error("Error connecting to MongoDB:" + e.message);
  }
};

export default conectMongo;
