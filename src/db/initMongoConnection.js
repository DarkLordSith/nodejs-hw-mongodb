import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { UserCollection } from '../models/user';
import { SessionsCollection } from '../models/session';

dotenv.config();

const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

export async function initMongoConnection() {
  try {
    console.log('🟢 Connecting to MongoDB:', MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}
export { UserCollection, SessionsCollection };
