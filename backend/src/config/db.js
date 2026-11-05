import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log("ℹ No MONGODB_URI found. Operating with seeded in-memory data store for instant offline availability.");
    return false;
  }

  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 });
    isConnected = true;
    console.log("✓ Connected to MongoDB Atlas successfully.");
    return true;
  } catch (err) {
    // Log error without exposing connection string
    console.log(`ℹ MongoDB connection notice: Database connection failed. Operating with in-memory store.`);
    console.error("[DB] Connection error (details hidden for security)");
    return false;
  }
}

export function isDbConnected() {
  return isConnected;
}
