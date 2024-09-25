import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/cricket-score';

// const options: mongoose.ConnectOptions = {};
export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}
