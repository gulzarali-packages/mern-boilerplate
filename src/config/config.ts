import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
};

export default config;
