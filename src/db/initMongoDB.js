import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

// const dbHost = getEnvVar('DB_HOST');

export const initMonogDB = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const password = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Mongo db has successfully connected');
  } catch (error) {
    console.log(`Error connection Mongo ${error}`);
    throw error;
  }
};
