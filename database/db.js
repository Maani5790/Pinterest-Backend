import mongoose from "mongoose";

const dbConnect = async (req, res) => {
  const db_url =
    "mongodb+srv://pinterest:expobird123@pinterest.i7vwqtn.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(db_url);
    console.log("database connected")
  } catch (error) {
    console.log("error while connected mongoDB", error);
  }
};

export default dbConnect