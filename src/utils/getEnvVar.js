import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export function getEnvVar(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}
