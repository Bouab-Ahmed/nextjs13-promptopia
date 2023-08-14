import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery',true);

  if (isConnected) {
    console.log('database is already connected');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "share_prompts",
    });

    isConnected = true;

    console.log('database connected');
  } catch (error) {
    console.log(error)
  }
}